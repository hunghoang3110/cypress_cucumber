// Generate datetime ONCE and export as a constant
const today = new Date();
const datetime = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}_${String(today.getHours()).padStart(2, '0')}${String(today.getMinutes()).padStart(2, '0')}`;

// Export as a constant (fixed at runtime)
export const getShareDatetime = () => datetime;