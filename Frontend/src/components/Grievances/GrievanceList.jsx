import { useEffect, useState } from "react";

const GrievanceList = () => {
  const [grievances, setGrievances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/grievances")
      .then((response) => response.json())
      .then((data) => {
        setGrievances(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching grievances:", error);
        setError("Failed to load grievances. Try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-4">
          All Grievances
        </h2>

        {loading && (
          <p className="text-center text-gray-500">Loading grievances...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}

        <ul className="space-y-4">
          {grievances.length > 0
            ? grievances.map((grievance) => (
                <li
                  key={grievance._id}
                  className="p-4 border border-gray-300 rounded-lg shadow-sm"
                >
                  <strong className="text-lg">{grievance.name}</strong>
                  <p className="text-gray-600">{grievance.description}</p>
                </li>
              ))
            : !loading && (
                <p className="text-center text-gray-500">
                  No grievances found.
                </p>
              )}
        </ul>
      </div>
    </div>
  );
};

export default GrievanceList;
