import React, { useEffect, useState } from "react";
// import { getAllComplaints } from "../lib/api";

const SeeComplaints = () => {
  return (<h1>hello</h1>)
}
  /*const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Database se data load karne ke liye function
  const fetchComplaints = async () => {
    try {
      setLoading(true);
      setError(""); // Reset error on new fetch attempt
      const data = await getAllComplaints();
      
      // CRITICAL FIX: Ensure data is an array before setting state
      if (data && Array.isArray(data)) {
        setComplaints(data);
      } else if (data && Array.isArray(data.complaints)) {
        // If your backend nesting is inside a response property
        setComplaints(data.complaints);
      } else {
        setComplaints([]);
      }
    } catch (err) {
      setError(err.message || "Something went wrong while fetching data");
    } finally {
      setLoading(false);
    }
  };

  // Component load hote hi data chal jaye
  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div className="min-h-screen bg-pink-100 py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-2xl font-bold text-gray-800">दर्ज शिकायतें (All Complaints)</h2>
          <button 
            onClick={fetchComplaints} 
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-3 py-1 text-sm rounded transition flex items-center gap-1"
          >
            {loading ? "⏳ Loading..." : "🔄 Refresh"}
          </button>
        </div>
*/
//         {/* Loading State */}
//         {loading && <p className="text-center text-gray-600 font-medium">डेटा लोड हो रहा है...</p>}

//         {/* Error State */}
//         {error && <p className="text-center text-red-500 font-medium">{error}</p>}

//         {/* Empty State */}
//         {!loading && complaints.length === 0 && !error && (
//           <p className="text-center text-gray-500 py-8">अभी तक कोई शिकायत दर्ज नहीं की गई है।</p>
//         )}

//         {/* Complaints List Cards */}
//         <div className="flex flex-col gap-4">
//           {!loading && complaints.map((item) => (
//             <div key={item._id || item.id} className="border-l-4 border-pink-500 bg-pink-50 p-4 rounded shadow-sm hover:shadow-md transition">
//               <div className="flex justify-between items-start mb-2">
//                 <h3 className="text-lg font-semibold text-gray-900">👤 {item.name || "Unknown"}</h3>
//                 <span className="bg-pink-200 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">
//                   📍 Ward: {item.ward || "N/A"}
//                 </span>
//               </div>
              
//               <p className="text-gray-700 mb-3 bg-white p-2 rounded border border-gray-100">
//                 <strong>विवरण:</strong> {item.description || "कोई विवरण नहीं दिया गया है"}
//               </p>

//               <div className="flex justify-between text-xs text-gray-500 font-medium">
//                 <span>📞 {item.phone || "N/A"}</span>
//                 <span>
//                   📅 {item.createdAt ? new Date(item.createdAt).toLocaleString('hi-IN') : "N/A"}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

export default SeeComplaints;