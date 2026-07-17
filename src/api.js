const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function getJSON(path) {
  const res = await fetch(`${API_URL}${path}`);

  if (!res.ok) {
    throw new Error(`Request to ${path} failed with status ${res.status}`);
  }

  return res.json();
}

// [{ sport: "Throwball", count: 12 }, ...]
export function fetchSportsList() {
  return getJSON("/api/students/meta/sports");
}

// [{ _id, name, age, class, gender, sport, image }, ...]
export function fetchPlayersBySport(sport) {
  return getJSON(`/api/students/${encodeURIComponent(sport)}`);
}
