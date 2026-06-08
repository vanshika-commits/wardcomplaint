const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function createComplaint({ name, ward, description, phone, file }) {
  const fd = new FormData();
  fd.append("name", name ?? "");
  fd.append("ward", ward ?? "");
  fd.append("description", description ?? "");
  fd.append("phone", phone ?? "");
  if (file) fd.append("file", file);

  const res = await fetch(`${API_URL}/api/complaints`, {
    method: "POST",
    body: fd
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data?.message || "Failed to submit complaint";
    throw new Error(msg);
  }
  return data;
}

