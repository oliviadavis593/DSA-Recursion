//Count the number of sheep that jump over the fence 
//Number of sheep = current number of sheep 

const countSheep = (currNumber) => {
    //base case 
    if (currNumber <= 0) {
        return `All sheep have jumped over the fence`
    }
    else {
        console.log(`${currNumber} sheep jumped over the fence`)
        countSheep(currNumber - 1);
    }
}

countSheep(100);