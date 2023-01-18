console.log("Welcome to arrow function tutorial");

// regularing function
// function dj(){
//     console.log("This is best person ever");
// }
// dj();

// converting into arrow function
// const dj = () =>{
//     console.log("This is best person ever");
// }
// dj();

// function returing something (one line dont require braquet)
// const greet = () => "Good Morning";
// console.log(greet());

// single parameter do not need parentesis
// but you will have to put parenthesis is there are multiple parameter
const greet = (name, ending) => "Good Morning " + name + ending;
console.log(greet('DJ', ' BYE'));