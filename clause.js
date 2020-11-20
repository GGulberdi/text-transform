
// import ClauseMix from './clauseMix.js'
// const ClauseMix = require('./clauseMix');
import {capitalizeFirstCharacterOfWords, countCharacter, reverseString, reverseAllWords,
     replaceFirstOccurence, replaceAllOccurrences, encode, pigLatin, palindrome}from "./clauseMix.js";

function displayClause() {
    console.log(countCharacter("What is the color of the sky?", "t"));
    console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(reverseString("What is the color of the sky?"));
    console.log(reverseAllWords("What is the color of the sky?"));
    console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(encode("What is the color of the sky?"));
    console.log(palindrome("What is the color of the sky?"));
    console.log(pigLatin("What is the color of the sky?", '$'));
    console.log(replaceAllOccurrences('My name is ClauseMix'))

  }
  
  displayClause();

