reverse = (array) =>{
    let j = 0;
    const nuArray =[];
    for (let i = array.length -1;i > -1; i--){
        // console.log(i);
        // console.log(array[i]);
        nuArray[j] = array[i];
        j++;
    }
    console.log(nuArray);
}
let array = [1,2,3,4,5,6,7,8,9];

// reverse(array);


rotate = (array,shift) => {
    if(shift == 0){
        console.log(array);
        return array;
    }
    // let j= 0;
    else if (shift > 0){
        for(i=0; i < shift; i++){
            temp = array[array.length -1]
            console.log(temp)
            for(j = array.length-1; j>0; j--){
                array[j] = array[j-1]
                console.log(array)
            }
            array[0] = temp;
        }
        
    } else if (shift < 0){
        for(i=0; i < Math.abs(shift); i++){
            temp = array[0];
            for(j = 0; j < array.length -1; j++){
                array[j]= array[j+1]
            }
            array[array.length-1] = temp;
        }
    }
    console.log("this is the final array:", array)
}

// rotate([1,2,3,4,5],-2);

filterRange =(array,min,max) =>{
    let i = 0;
    for(let key in array){
        if (array[key] <= max && array[key] >= min){
            array[i] = array[key];
            ++i;
            // console.log(array, i);
        }
    } 
    console.log(i);
    array.length = i; //didn't know you can set arrays length!!!!
    console.log(array);
}

filterRange([1,2,3,4,5],2,1);