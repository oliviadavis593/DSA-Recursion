

/*
Objective: Write a recursive function that prints the Fib sequence of a given number
*/

function getFibSequence(number, array) {
    if (number === 1) {
        console.log(array)
        return number;
    } else if (number === 2) {
        return 1;
    } else {
        let sequenceNumber =
            getFibSequence(number - 1, array) +
            getFibSequence(number - 2, array);
        array.push(sequenceNumber);
        return sequenceNumber;
    }
}

console.log(getFibSequence(7, []));
