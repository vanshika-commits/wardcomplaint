import React, { useEffect, useState } from "react";
import { getAllComplaints } from "../lib/api";

const SeeComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [selectedWard, setSelectedWard] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const data = await getAllComplaints();
      setComplaints(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredComplaints = selectedWard
    ? complaints.filter(
        (complaint) => complaint.ward === selectedWard
      )
    : complaints;

  if (loading) {
    return (
      <div className="text-center mt-10 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-100 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-6">
          All Complaints
        </h1>

        {/* Ward Filter */}
        <div className="mb-6">
          <label className="font-semibold mr-3">
            Select Ward:
          </label>

          <select
            value={selectedWard}
            onChange={(e) =>
              setSelectedWard(e.target.value)
            }
            className="border p-2 rounded"
          >
            <option value="">All Wards</option>

            {[1,2,3,4,5,6,7,8,9,10].map((ward) => (
              <option
                key={ward}
                value={String(ward)}
              >
                Ward {ward}
              </option>
            ))}
          </select>
        </div>

        {/* Complaints */}
        {filteredComplaints.length === 0 ? (
          <div className="bg-white p-4 rounded shadow text-center">
            No complaints found.
          </div>
        ) : (
          filteredComplaints.map((complaint) => (
            <div
              key={complaint._id}
              className="bg-white p-5 rounded-lg shadow-md mb-4"
            >
              <h2 className="text-xl font-bold mb-2">
                Ward No. {complaint.ward}
              </h2>

              <p className="mb-2">
                <strong>Name:</strong>{" "}
                {complaint.name}
              </p>

              <p className="mb-2">
                <strong>Problem:</strong>{" "}
                {complaint.description}
              </p>

              <p className="mb-2">
                <strong>Phone:</strong>{" "}
                {complaint.phone}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded text-white ${
                    complaint.status === "Resolved"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {complaint.status}
                </span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SeeComplaints;