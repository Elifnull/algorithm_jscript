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

// whileLoop(2000);

birthdayTest1 = (num1,num2) =>{ //og test
    if (num1 != num2){
        if(num1 == 30 || 11){
            if(num2 == 30 || 11){
                console.log("Yep my birthday is 11/30")
            }
        }
        
    } else {
        console.log("these are not my birthdates")
    }
}

birthdayTest = (num1,num2) =>{
    if (num1 != num2 && (num1 == 30 || 11) && (num2 == 30 || 11)){ //refactored!
        console.log("Yep my birthday is 11/30")
        
    } else {
        console.log("these are not my birthdates")
    }
}
// birthdayTest(30,11);
// birthdayTest(11,30);
// birthdayTest(11,11);
// birthdayTest(30,30);

leapYear = (year) => {//leap year wording is confusing, figuried it out
    if( year % 4 == 0 && ((year % 100 != 0) || (year % 400 == 0))){
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}

// leapYear(1989);
// leapYear(1991);
// leapYear(1992);
// leapYear(1993);
// leapYear(1995);

printCount = (count, stop) =>{
    let integerCount= 0;
    let initalCount = count;
    while(count <= stop) {
        if (count % 5 == 0){
            console.log(count);
            integerCount++;
        }
        count++;
    }
    console.log(`there where ${integerCount} integers divisible by 5 from ${initalCount} to ${stop}`)
}

// printCount(512,4096);