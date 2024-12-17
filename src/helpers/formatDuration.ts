export default function formatDuration(minutes: number) {
  if (minutes < 60) {
    return {
      duration: minutes,
      unit: `minute${minutes !== 1 ? 's' : ''}`
    };
  }

  // Convert to hours, rounding to 1 decimal place
  const hours = Number((minutes / 60).toFixed(1));

  return {
    duration: hours % 1 === 0 ? Math.round(hours) : hours,
    unit: `hour${hours !== 1 ? 's' : ''}`
  };
}
