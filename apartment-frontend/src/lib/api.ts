export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function fetchApartments(search?: string) {
  const res = await fetch(`${API_URL}/api/apartments${search ? `?search=${search}` : ""}`);
  if (!res.ok) throw new Error("Failed to fetch apartments");
  return res.json();
}

export async function fetchApartmentById(id: string) {
  const res = await fetch(`${API_URL}/api/apartments/${id}`);
  if (!res.ok) throw new Error("Failed to fetch apartment");
  return res.json();
}

export async function addApartment(formData: FormData) {
  const res = await fetch(`${API_URL}/api/apartments`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to add apartment");
  }

  return res.json();
}
