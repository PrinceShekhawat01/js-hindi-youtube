//object jo hai bo 2 parkar su banayo jaa sak hai ek to constructor ki help su or ek literal ki help su 
//jo constructor ki help su banayo jaav hai bo hov hai singularity 
//interview question important hai ki ek symbol liyo or bin object ki keys k roop m represent karo or baad m bin print karo 
//javascript sikhni hai to 2 cheez sikhlyo khel katam hai ek hai objects or ek hai events
//spread in objects as well just like the arrays 
//database se agar data aayega to wo kayi baar array of objects ki  form me aayega 





// const tinderUser={}
// tinderUser.id="123abc";
// tinderUser.name="Same";
// tinderUser.isLoggedIn=false;
// console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"chaudhary"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);
const obj1={
    1:"a",
    2:"b"
};
const obj2={3:"a",4:"b"};
//const obj3={"obj1","obj2"};
const obj3={...obj1,...obj2};
console.log(obj3);