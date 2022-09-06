export function formatDate() {
  const today = new Date();

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-GB", options).format(today);
}
