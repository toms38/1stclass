console.log("hi");

const score = 100;
console.log(score);

const value = new Number(400); //explicitly 
console.log(value.toString()); //convert to string yes 
console.log(value.toString().length); //proof convert to string yes 
console.log(value.toFixed(2));    //fixed decimal value

const longnumber= 1123.9565678
console.log(longnumber.toPrecision(8));


const hundreds=100000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));
