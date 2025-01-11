//so the function can be used anywhere anytime in the same 
// function sayMyName(){
//     console.log("hello how are you!");
// }
// sayMyName; --->Reference
// sayMyName(); ---->execution 


// function addTwoNumbers(number1,number2){
//      let result=(number1+number2);
//      return result;
// }
// const result=addTwoNumbers(3,4);
// console.log(result);


function loginUserMessage(username){
    return `${username} just logged in`
   
}
console.log(loginUserMessage("prince"));