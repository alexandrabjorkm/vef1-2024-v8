import { isString } from '../lib/helpers.js';

/**
 * 
 * @param {string} str 
 * @returns {string | null} 
 */
export function reverse(str) {
  if (isString(str)) {
    return str.split('').reverse().join('');
  }
  console.error('reverse: Input is not a string:', str);
  return null;
}
