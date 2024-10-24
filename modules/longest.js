import { isString, splitOnWhitespace } from '../lib/helpers.js';

/**
 * 
 * @param {string} str 
 * @returns {string | null} 
 */
export function longest(str) {
  if (isString(str)) {
    const words = splitOnWhitespace(str);
    return words.reduce((longest, current) => 
      current.length > longest.length ? current : longest, 
    words[0]);
  }
  console.error('longest: Input is not a string:', str);
  return null;
}
