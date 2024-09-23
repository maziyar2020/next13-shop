export function toLocalDateString(date) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return new Date(date).toLocaleDateString("fa-IR", options);
}

export function toLocalDateStringShort(date) {
  return new Date(date).toLocaleDateString("fa-IR");
}
