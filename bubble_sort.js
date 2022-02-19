//Bubble sort data

const test = [1,9,12,1, 0, 144, 9345, -1, -3, 5, 8, 9]

const bubbleSort = array => {
    for(let i =0; i < array.length; i++) { // iterate to get to the index
        for(let d = 0; d < array.length - i; d++) { // iterate through individual indecie values
            if(array[d] > array[d+1]) {
                let temp = array[d];
                array[d] = array[d+1];
                array[d+1] = temp;
            }
        }
    }return array
}

console.log(bubbleSort(test));
