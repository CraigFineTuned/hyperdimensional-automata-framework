import * as constants from './constants';

// Export all utility functions and constants
export { constants };

/**
 * Generate a color based on a value within a range
 * @param {number} value - Value to map to a color
 * @param {number} min - Minimum value in the range
 * @param {number} max - Maximum value in the range
 * @param {string[]} colors - Array of colors to interpolate between
 * @returns {string} - HEX color value
 */
export function getColorFromGradient(value, min, max, colors) {
  // Normalize value to 0-1 range
  const normalizedValue = (value - min) / (max - min);
  
  // Clamp to prevent out-of-range errors
  const clampedValue = Math.max(0, Math.min(1, normalizedValue));
  
  // Calculate which two colors to interpolate between
  const numSegments = colors.length - 1;
  const segment = Math.min(Math.floor(clampedValue * numSegments), numSegments - 1);
  const segmentValue = (clampedValue * numSegments) - segment;
  
  // Get the two colors to interpolate between
  const color1 = hexToRgb(colors[segment]);
  const color2 = hexToRgb(colors[segment + 1]);
  
  // Interpolate between the two colors
  const r = Math.round(color1.r + segmentValue * (color2.r - color1.r));
  const g = Math.round(color1.g + segmentValue * (color2.g - color1.g));
  const b = Math.round(color1.b + segmentValue * (color2.b - color1.b));
  
  // Convert back to hex
  return rgbToHex(r, g, b);
}

/**
 * Convert hex color to RGB
 * @param {string} hex - Hex color value
 * @returns {Object} - RGB color object
 */
export function hexToRgb(hex) {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Parse hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return { r, g, b };
}

/**
 * Convert RGB color to hex
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {string} - Hex color value
 */
export function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Generate a random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Random integer
 */
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Delay execution for a specified time
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} - Promise that resolves after the delay
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Deep clone an object or array
 * @param {Object|Array} obj - Object or array to clone
 * @returns {Object|Array} - Deep clone of the input
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Format a rule number as a binary string
 * @param {number} ruleNumber - Rule number (0-255)
 * @returns {string} - Binary representation padded to 8 digits
 */
export function formatRuleBinary(ruleNumber) {
  return ruleNumber.toString(2).padStart(8, '0');
}

export default {
  getColorFromGradient,
  hexToRgb,
  rgbToHex,
  getRandomInt,
  delay,
  deepClone,
  formatRuleBinary
};