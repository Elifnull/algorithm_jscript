

//List Reversal .split("").reverse().join("")

const list ="This is an example of random stuff, that I would need to do, that will reveres teh list."

console.log(list.slice(21,-5))
// console.log(list.slice(5).split("").concat(["lm"]).reverse().join(""))

//List reversal
const list1 = list.split("") //splists the list into an array or individual letters

const list2 = list1.reverse()// reverses the array
console.log (list2)

const listFinal = list2.join("")
console.log(listFinal)

const isEqual = (list1, list2) => (list1 === list2);
const isEven = number => (number % 2 === 0);
// console.log(isEqual(listFinal, list2.join("")), list2.join(""))

array = [1,2,3,4,5,6,7,8]

console.log(array.forEach(isEven));
//Join objects .concat("object to be joinded")




//Object.freeze()
array = [21,11,22,12,-2, -3, 10, 00, -1, 2, 9, 6];
const tuple = Object.freeze(array); //Object.freeze() creates an imutable object!!

console.log(tuple);

const spreadArray = [...array, 00, 01, 02, 04]; // spread operator creates a shallow copy, that can be used to create new array object

console.log(spreadArray);


/// Sorting with .sort()

console.log(spreadArray.sort()); // sort is not as good, it converts each index value into a string,

/// work around for sort of numbers
console.log(spreadArray.sort(function(a,b){return a-b})); //this does a comparative analysis of the values and sorts them based off of the difference between values