import { isString, splitOnWhitespace } from '../lib/helpers.js';

/**
 * 
 * @param {string} str 
 * @returns {string | null} 
 */
export function shortest(str) {
  if (isString(str)) {
    const words = splitOnWhitespace(str);
    return words.reduce((shortest, current) => 
      current.length < shortest.length ? current : shortest, 
    words[0]);
  }
  console.error('shortest: Input is not a string:', str);
  return null;
}
