console.log("OBJECTS");
//By two methods we can create objects , objects construction lead to singleton aand other is 
// object through literqasl we will use this for now 


//smbol
let mysym=Symbol("KEY1");

let object={
    name :"TARIQ",
    "full name":"TARIKAZIZ",
    Rollno:9,
    [mysym]:"mykey1",
    email:"abc@gmail.com",
    loggedin: false,
    days:["monday","wednesday"]

}
console.log(object.email);
console.log(object["email"]);

// console.log(object.full name); //here . method fial jhhhhh 
console.log(object["fullname"]);
console.log(object.mysym);
console.log(typeof object.mysym);

console.log(object[mysym]);
console.log(typeof object.mysym);



