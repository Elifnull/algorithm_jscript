
const spreadForward = (array, val) =>{
    return newArray =[val, ...array];
    }

const pushForward = (array, val) => {
    const nuArray = [val];
    for (let key in array){
        console.log(parseInt(key)+1); //seeing how this works
        nuArray[parseInt(key)+1] = array[parseInt(key)];
    }
    console.log(nuArray);
    return nuArray;
}

let array1 = [4,3,5,9]
let val1 = 344

let array2 =[];
let val2 = null;

// console.log(spreadForward(array1,val2));
// pushForward(array1, val1);
// pushForward(array2,val2);

const popFirst = (array) => {
    const [first,...everythingelse] = array;
    console.log(everythingelse, first)
    return first
};

const popFirstv1 = array =>{
    let nuArray = [];
    for( let key in array){

    }
}

popFirst(array1)
