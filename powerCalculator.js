//function returns value of base ^ exponent = 3^3 (value = 27)

const powerCalculator = (base, exp) => {
    let value = 0; 
    //base case 
    if (exp < 0) {
        return `Exponent has to be greater than or equal to 0... Try again`
    }
    else {
        base * powerCalculator(base, exp - 1)
    }
}

console.log(powerCalculator(3, 3))