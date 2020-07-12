
const reverseString = (str) => {
    if (str === '') {
        return '' 
    } 
    else {
       return reverseString(str.substring(1)) + str.charAt(0);
    }
}

console.log(reverseString(`I'm over here reversing`))


