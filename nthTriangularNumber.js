

/*
Objective: Triangular number counts the object that can a form equilateral triangle
1. nth trinangular number is the number of dots composing a triangle with n dots on a side
2. its equal to the sum of the n natural number from 1 to n 
3. this is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
*/

function createTriangle(rowNum, colNum) {
    if (colNum === 0 || colNum === rowNum - 1) {
        return 1; 
    } else {
        return (
            createTriangle(rowNum - 1, colNum) +
            createTriangle(rowNum - 1, colNum - 1)
        );
    }
}

console.log(createTriangle(5, 3))