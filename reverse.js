// Write a function in Javascript that will reverse every word in a given string and 
//return the new string. Every word should be reversed but the string as a whole should not 
//be reversed. And DO NOT use array.reverse() method
//function to reverse the string 

// a function which reverses the string
function stringRev(st){
    let newStr =""
    for(let i = (st.length - 1); i >=0; i--){
        newStr += st[i]
    }
    return newStr
}

//a function wich first seperate string into array, dilimiter " ", and then pass array element to stringRev function. to reverse string per word.
function stringReverse(str){
    let tempArr = str.split(" ")
  //  console.log(tempArr.length)
    let newStr =""

    for(let j = 0; j < tempArr.length ; j++){
        newStr = newStr + stringRev(tempArr[j])+ " "
    }
    return newStr
}

b = stringReverse("I am happ'y I want to go to pokhara. ")
console.log(b)
