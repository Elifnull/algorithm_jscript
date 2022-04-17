minToFront = (array) => {
    if(array.length < 2){
        console.log("there is only 1 element")
        return array;
    } else{
    let min = [array[0]];
    let nuArray = [];
    let i = 0;
    for(let key in array){
        if(array[key] < min[0]){
            min[0] = array[key]
            console.log(array[key])
        } else{
            console.log('else:',array[key])
            nuArray[i] = array[key];
            ++i;
        }
    }
    let NuRay = [min[0],...nuArray]
    console.log(NuRay);
    console.log(min)
    return NuRay;}
}

minToFront([2,3,4,6,1,0]);
minToFront([0]);