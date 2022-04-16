countdown = (number) => {
    countdownArray = [];
    while (number >= 0){
        countdownArray.push(number);
        number--;
    }
    console.log(countdownArray);
}

// countdown(10);

printReturn = (array) => {
    console.log(`print value: ${array[0]}`, `return value: ${array[1]}`);
    return array[1];
}

// printReturn([1,11]);
// console.log(`this is a test the value of printReturn function: ${printReturn([1,11])}`)