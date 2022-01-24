// Write a function in Javascript that will reverse every word in a given string and 
//return the new string. Every word should be reversed but the string as a whole should not 
//be reversed. And DO NOT use array.reverse() method
//function to reverse the string 
function stringReverse(str){
    newStr =""
    for(let i = str.length-1; i >=0; i--){
        newStr += str[i]
    }
    return newStr
}

a =stringReverse("ankit kafle")
console.log(a)