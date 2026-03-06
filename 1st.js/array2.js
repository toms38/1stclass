console.log("ARRAY PART-II");
const arr1=["ali", "ahmad", "aziz"];
const arr2=["zayan", "zalan", "zahid"];


// arr1.push(arr2); //take arr2 as one element on fourth
// console.log(arr1);
// console.log(arr1[4,1]); //one ko specific krna

// const arr3=arr1.concat(arr2);
// console.log(arr3); //now combine two arrays

//SPREAD OPERATOR
// const arr4=[...arr1, ...arr2]
// console.log(arr4);


// const flate=[1,2,3,[4,5,6],7,8,[9,10,[11,12,13],14],15]
// const newflat=flate.flat(Infinity)
// console.log(newflat); //into one basic array

console.log(Array.isArray("khan")); //check array is or not
console.log(Array.from("khan")); //making array from given thing 
console.log(Array.from({name : "TARIQAZIZ"})); //[] return empty when not making an array


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));


