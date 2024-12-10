//++++++++++++++++++++++++++++++++++++++++++++++++
//Stack(Primitive) ,Heap(Non primitive)
//is this possible to copy like the primitive but from the non pimitive and how 

/*let myYoutubename="hitestchaudhary.com";
let anothername=myYoutubename
anothername="chaiaurcode";
console.log(myYoutubename);
console.log(anothername);*/

/*let userOne={
    email:"user@google.com",
    upi:"user@ybl"  //////////////doubt /////////////
};
let userTwo=userOne;
console.log(userOne);
userTwo={
    email:"kamalprince01@gmail.com",
    upi:"hello"
};
console.log(userOne);*/

let userOne={
    email:"user@google.com",
    upi:"user@ybl"  //////////////doubt /////////////
};
let userTwo=userOne;
userTwo.email="kamalprince@gmail.com";
console.log(userTwo);
console.log(userOne);
