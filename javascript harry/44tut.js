console.log("Welcome to error handling tutorial");

// let a = "DJ Kalathiya";
// if(a != undefined){
//     throw new Error('This is not undefined');
// }else{
//     console.log('This is undefined');
// }

try{
    console.log("we are inside my block");
    functiondj();
}catch(error){
    console.log(error);
    console.log("Are you okay?");
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("Finally we will run this")
}