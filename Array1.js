
const spreadForward = (array, val) =>{
    return newArray =[val, ...array];
    }

const pushForward = (array, val) => {
    const nuArray = [val];
    for (let key in array){
        console.log(parseInt(key)+1); //seeing how this works
        nuArray[parseInt(key)+1] = array[key];
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
    let initalVal = array[0];

    for( let key in array){
        console.log(array[key]);
        
    }
}

// popFirstv1(array1)

const insertValue = (array,location, value) => {
    let nuArray =[];
    nuArray[location] = value;
    console.log(nuArray);
    for( let key in array){
        if (key < location ){
            nuArray[key] = array[key]
        }
        else if (key >= location){
            console.log(key, key+1)
            nuArray[parseInt(key)+1] = array[key];
        }
    }
    console.log(nuArray);
    return nuArray;
}

insertValue(array1,2,val2);