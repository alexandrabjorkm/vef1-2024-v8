import { isString } from '../lib/helpers.js';

/**
 * 
 * @type {string[]}
 */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

/**
 * 
 * @param {string} str 
 * @returns {number} 
 */
export function vowels(str) {
  if (isString(str)) {
    const characters = str.toLowerCase().split('');
    return characters.filter(char => VOWELS.includes(char)).length;
  }
  console.error('vowels: Input is not a string:', str);
  return 0;
}
