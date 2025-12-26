/**
 * Formats a duration in seconds into a human-readable string.
 * @param {number} seconds - The duration in seconds.
 * @returns {string} - The formatted duration (e.g., "45s", "2m 10s").
 */
export const formatDuration = (seconds) => {
  if (seconds === null || seconds === undefined) return 'N/A';
  if (seconds < 0) return '0s';
  if (seconds < 60) return `${seconds}s`;
  
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  
  if (mins < 60) {
    return `${mins}m ${secs}s`;
  }
  
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  return `${hours}h ${remainingMins}m ${secs}s`;
};



