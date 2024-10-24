import { isString } from '../lib/helpers.js';
import { reverse } from './reverse.js';

/**
 * 
 * @param {string} str
 * @returns {boolean} 
 */
export function palindrome(str) {
  if (isString(str) && str !== '') {
    const reversed = reverse(str);
    return str.toLowerCase() === reversed.toLowerCase();
  }
  console.error('palindrome: Input is not a valid string:', str);
  return false;
}
