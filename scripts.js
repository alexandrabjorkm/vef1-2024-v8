/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from './lib/helpers.js';
import { longest } from './modules/longest.js';
import { shortest } from './modules/shortest.js';
import { reverse } from './modules/reverse.js';
import { vowels } from './modules/vowels.js';
import { consonants } from './modules/consonants.js';
import { palindrome } from './modules/palindrome.js';

const textareaElement = document.querySelector('textarea');
const formElement = document.querySelector('form');
const outputElement = document.querySelector('.output');
const inputDisplayElement = document.querySelector('.input');
const longestElement = document.querySelector('.longest');
const shortestElement = document.querySelector('.shortest');
const reversedElement = document.querySelector('.reversed');
const vowelsElement = document.querySelector('.vowels');
const consonantsElement = document.querySelector('.consonants');
const palindromeElement = document.querySelector('.palindrome');

/**
 * 
 * @param {Element} el 
 */
function removeHidden(el) {
    el.classList.remove('hidden');
  }
  
  /**
   * 
   * @param {Event} event 
   */
  function submitHandler(event) {
      event.preventDefault();
  
      const text = textareaElement.value.trim();
  
      if (!text) {
          alert('Sláðu inn texta til að greina kjáni.');
          return;
      }

      if (inputDisplayElement) {
        inputDisplayElement.textContent = text;
    }
  
      const longestWord = longest(text);
      const shortestWord = shortest(text);
      const reversedText = reverse(text);
      const vowelCount = vowels(text);
      const consonantCount = consonants(text);
      const isPalindrome = palindrome(text);
  
      if (longestElement) longestElement.textContent = longestWord || 'N/A';
      if (shortestElement) shortestElement.textContent = shortestWord || 'N/A';
      if (reversedElement) reversedElement.textContent = reversedText || 'N/A';
      if (vowelsElement) vowelsElement.textContent = vowelCount;
      if (consonantsElement) consonantsElement.textContent = consonantCount;
      if (palindromeElement) palindromeElement.textContent = isPalindrome ? 'samhverfur' : 'ekki samhverfur';
  
      if (outputElement) {
          removeHidden(outputElement);
      }
  }
  
  formElement.addEventListener('submit', submitHandler);