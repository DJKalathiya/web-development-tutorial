// console.log('welcome to tut 12.js');
// let a = document;
// a = document.all;
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
// console.log(a);

// Tutorial 14 
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.parentNode;

element.style.color = 'red';
element.innerText = 'Darshan is devil';

let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
console.log(sel);

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
});