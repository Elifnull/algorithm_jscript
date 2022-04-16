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

factorial(5);