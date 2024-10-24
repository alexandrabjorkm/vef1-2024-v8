import { isString } from '../lib/helpers.js';

/** 
 * 
 * @type {string[]}
 */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/**
 * 
 * @param {string} str 
 * @returns {number} 
 */
export function consonants(str) {
  if (isString(str)) {
    const characters = str.toLowerCase().split('');
    return characters.filter(char => CONSONANTS.includes(char)).length;
  }
  console.error('consonants: Input is not a string:', str);
  return 0;
}