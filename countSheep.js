

//Drill #1: Counting Sheep
/*Objective: 
- Write a recursive function that counts how many sheep jump over the fenct 
1. Program should take a number as input 
2. That number should be the number of sheep you have 
3. The function should display the number along with message: "Another sheep jumps over the fence"
4. This should happen until no sheep are left 
*/

//Output: 3
//Output: 
//3 - Another sheep jumps over the fence 
//2 - Another sheep jumps over the fence 
//1 - Another sheep jumps over the fence 

function countSheep(currentNumber) {
    if (currentNumber === 0) {
        return 'All sheep have jumped over the fence';
    } else {
        console.log(currentNumber + '' + 'Another Sheep jumps over the fence');
        totalNumSheep = currentNumber -= 1; 
        countSheep(totalNumSheep);
    }
}
countSheep(3)
