/*
Julius Caesar protected his confidential information by encrypting 
it using a cipher. Caesar's cipher shifts each letter by a 
number of letters. If the shift takes you past the end of the 
alphabet, just rotate back to the front of the alphabet.
 In the case of a rotation by 3, w, x, y, and z would map 
 to z, a, b and c. 
Code the Caesar Cipher in Javascript and submit it here.
*/

// A function which shifts the alphabet given the character and key for ceaser cipher encription
function ceaserCipher(char, key)
{
    newChar = (char.charCodeAt(0)+key)
    if(newChar<=122){
        return newChar;
        //this statement makes sure the group is cyclic, that is, imitates modolus calculation
    } else {
        return (newChar-122)+96
    }
}
// Ceaser cipher encription
function encCeaser(plaintext, key) {
    let encText=""
    for (let j = 0; j < plaintext.length; j++) { // Loop through alphabet array, and applies ceaserCipher
        encText += String.fromCharCode(ceaserCipher(plaintext[j],key))
    }
    return encText;
}

//printing the result
console.log(encCeaser("wxyz",3));
