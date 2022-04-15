loopFor = () => {
    for (let i = -52; i <= 1066; i++) {console.log(i);}
}

// loopFor();

cheerful = () => console.log("Good Morning");

loopCheerful=(count)=> {
    while (count > 0){
    cheerful();
    count--;
    console.log(count);}
}

// loopCheerful(98);

loopThrees = () =>{
    for(i = -300;i<1; i+=3){
        console.log(i);
    }
    console.log(`finished on i value ${i}`);
}

// loopThrees();

whileLoop = (count) => {
    while(count < 5281){
        console.log(count);
        count++;
    }
    console.log(`finished on count value ${count}`)
}

whileLoop(2000);