export const API_URL = "http://localhost:5001/api/v1";

export async function getData(endpoint: string) {
  const url = `${API_URL}/${endpoint}`;
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// endpoints
export const endpoints = {
  users: "users",
  usersMe: "users/me",
};
