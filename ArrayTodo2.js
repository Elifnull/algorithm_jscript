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

reverse(array);



