

/*
Objective: Write a function that reverses a string. 
1. Take a string as input
2. Reverse the string 
3. Return the new string 
*/

function reverseString(string) {
    if (string === '' ) {
        return '';
    } else {
        console.log(string.substr(1), string[0]);
        return reverseString(string.substr(1)) + string[0];
    }
}

reverseString('Hello');