const API_URL = "http://localhost:5000";

export async function createComplaint({
  name,
  ward,
  description,
  phone,
}) {
  const res = await fetch(`${API_URL}/api/v1`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      ward,
      description,
      phone,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "Failed to submit complaint"
    );
  }

  return data;
}

// NEW FUNCTION
export async function getAllComplaints() {
  const res = await fetch(`${API_URL}/api/v1`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "Failed to fetch complaints"
    );
  }

  return data.data;
}