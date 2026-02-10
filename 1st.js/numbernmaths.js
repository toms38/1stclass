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
 
















//+++++++++++MATHS LIBRARAY++++++++++++++
//+++++++++++MATHS LIBRARAY++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.1));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));

console.log(Math.tan(45));
console.log(Math.max(3,5,6,7,1));
console.log(Math.min(3,5,6,7,1));

console.log(Math.random()); //This must  be in range of 0-1
console.log((Math.random()*6)+1); // by this we set limit
console.log(Math.floor(Math.random()*6)+1); // by this we set limit










const min=10;
const max=10;
console.log(Math.floor(Math.random()*(max-min))+min); //this when we set our range

