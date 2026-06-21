import React, { useState } from "react";
import { createComplaint } from "../lib/api";
import { useNavigate } from "react-router-dom";
const Registerco = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    ward: "",
    description: "",
    phone: "",
    file: null,
  });

  const [listening, setListening] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 🎤 voice to text
  const startListening = () => {
    const recognition =
      new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = "hi-IN";
    setListening(true);

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setFormData((prev) => ({
        ...prev,
        description: prev.description + " " + transcript,
      }));
    };

    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);
  };

  // submit to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      await createComplaint(formData);

alert("Complaint submitted ✅");

navigate("/register/See");
      // reset form
      setFormData({
        name: "",
        ward: "",
        description: "",
        phone: "",
        file: null,
      });
    } catch (err) {
      alert(err?.message || "Failed to submit complaint");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center px-4">
      
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg flex flex-col gap-4">
        
        <h2 className="text-2xl font-semibold text-center">
          शिकायत दर्ज करें
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          
          <input
            type="text"
            name="name"
            placeholder="नाम"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded outline-none"
          />

          <input
            type="text"
            name="ward"
            placeholder="वार्ड नंबर"
            value={formData.ward}
            onChange={handleChange}
            className="border p-2 rounded outline-none"
          />

          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="border p-2 rounded"
          />

          {/* TEXTAREA + MIC */}
          <div className="flex flex-col gap-2">
            <textarea
              name="description"
              placeholder="समस्या का विवरण"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 rounded h-[100px] outline-none"
            />

            <button
              type="button"
              onClick={startListening}
              className={`py-2 rounded text-white ${
                listening ? "bg-red-500" : "bg-green-600"
              }`}
            >
              {listening ? "🎙️ सुन रहा हूँ..." : "🎤 बोलें"}
            </button>
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="मोबाइल नंबर"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded outline-none"
          />

          <button
            type="submit"
            disabled={submitting}
            className={`text-white py-2 rounded transition ${
              submitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {submitting ? "Submitting..." : "सबमिट करें"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Registerco;