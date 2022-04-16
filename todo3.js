sigma = (num) => {
    let val = 0;
    while (num > 0){
        val += num;
        // console.log(num, val)
        num--;
    }
    console.log(val)
    return val;
}

// sigma(5);

factorial =(num)=> {
    let fact = 1;
    while(num > 1){
        fact *= num;
        console.log(fact);
        num--;
        
    }
    console.log(fact);
    return fact;
}

// factorial(5);

fib = (num) => {//need to think more about this sequence
    if( num < 3) return 1;
    let previous = 1;
    let current = 1;
    for(let i = 2; i < num; i++){
        let now = previous + current;
        previous = current;
        current = now;
        console.log(previous, current, now)
    }
    console.log(`current: ${current}`);
    return current;
}

fib(6);