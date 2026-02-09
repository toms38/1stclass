const name= "TARIK AZIZ"
const age=20;
console.log(`my name is ${name} and my age is ${age}`);

const goodname=new String("TOMS");
console.log(goodname); //showing value key pair but in chrome browser
console.log(goodname[0]); //access key value 
console.log(goodname.__proto__); // oobject ko check krny kilye
console.log(goodname.length); // functions method 
console.log(goodname.toUpperCase());  
console.log(goodname.toLowerCase());  
console.log(goodname.charAt(0));
console.log(goodname.indexOf('M'));
//...
//...
//...
//
//const newname= name.substring(0,2); //2 is'nt included
//console.log(newname);
////

const newname= name.slice(0,2); //accept negative values but  substring not accept negative
console.log(newname);

const trimstrig="        TARIK-AZIZ        ";
console.log(trimstrig);
console.log(trimstrig.trim());

const url= "http://tarikaziz/aziz20%.com";
console.log(url.replace('20%','--'));
console.log(url.includes('aziz')); //true 

const splituse ="TARIK-AZIZ-KAKAKHEL";
console.log(splituse.split('-')); //split into three is this case 










