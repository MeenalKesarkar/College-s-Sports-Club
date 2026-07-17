const ICONS = {
  cricket: "🏏",
  football: "⚽",
  volleyball: "🏐",
  badminton: "🏸",
  kabaddi: "🤼",
  throwball: "🤾",
  basketball: "🏀",
  hockey: "🏑",
  "table tennis": "🏓",
  tabletennis: "🏓",
  tennis: "🎾",
  chess: "♟️",
  athletics: "🏃",
  "kho-kho": "🏃‍♀️",
  "kho kho": "🏃‍♀️",
  swimming: "🏊",
  carrom: "🎯",
};

export function sportIcon(name = "") {
  const key = name.trim().toLowerCase();
  return ICONS[key] || "🏅";
}
