function formatDuration(timeInSeconds) {
  if (!timeInSeconds) return "now";

  const timeUnitsWithValues = getTimeUnitsWithValues(timeInSeconds);

  const results = Object.entries(timeUnitsWithValues)
    .filter(([_, val]) => val)
    .map(([key, val]) => {
      const unit = val > 1 ? key : key.slice(0, -1);
      return `${val} ${unit}`;
    });

  return results.length > 1
    ? results.slice(0, -1).join(", ") + " and " + results.slice(-1)
    : results.join("");
}

function getTimeUnitsWithValues(timeInSeconds) {
  const secsPerYear = 60 * 60 * 24 * 365;
  const secsPerDay = secsPerYear / 365;
  const secsPerHour = secsPerDay / 24;
  let restSecs;

  const years = Math.trunc(timeInSeconds / secsPerYear);
  restSecs = timeInSeconds % secsPerYear;

  const days = Math.trunc(restSecs / secsPerDay);
  restSecs = restSecs % secsPerDay;

  const hours = Math.trunc(restSecs / secsPerHour);
  restSecs = restSecs % secsPerHour;

  const minutes = Math.trunc(restSecs / 60);
  const seconds = restSecs % 60;

  return {
    years,
    days,
    hours,
    minutes,
    seconds,
  };
}
