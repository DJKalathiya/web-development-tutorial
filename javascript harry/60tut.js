console.log('Welcone to 60 tutorial');

// Destructuring in javascript
// let a,b;
// [a,b] = [34,564];
// console.log(a,b);


// [a,b,c, ...d] = [1,2,3,4,5,6,7,8,9];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


const fruits = ['Apple','mango','banana'];
[a,b,c] = fruits;
console.log(a,b,c);

// Object destructing
laptop = {
    model: "hp pavilion",
    age: "23 days",
    gender: "male",
    net: 1244,
    start: function(){console.log('started')}
}

const {model,age,gender,net,start} = laptop;
console.log(model,age,gender,net,start);
start();