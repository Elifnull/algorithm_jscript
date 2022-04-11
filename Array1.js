
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

array1 = [4,3,5,9]
val1 = 344

pushForward(array1, val1);