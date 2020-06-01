
/*
Objective: Write a recursive function that splits a string based on a seperator
1. Don't us JS array's split function to solve this problem 
*/

//Input: 02/20/2020
//Output: ["02", "20", "2020"]

function stringSplitter(string, array) {
    //Determine if we need to split string
    let stringContainsSpace = string.includes(' ')
    //Find where word ends and grab that index
    let findWhereWordEnds = string.indexOf(' ');
    let firstWordOfString = string.substring(0, findWhereWordEnds);
    let remainPartOfString = string.substring(findWhereWordEnds + 1);

    //base case
    if (stringContainsSpace === false) {
        array.push(string);
        return array; 
    } else {
        array.push(firstWordOfString);
        //call the function 
        return stringSplitter(remainPartOfString, array);
    }
}

stringSplitter('Lets get out of this recursion', []);
