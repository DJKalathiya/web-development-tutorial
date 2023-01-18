console.log('Welcome to async tutorial');

async function dj() {
    console.log('Inside dj function');
    const response = await fetch('https://api.github.com/users');
    console.log('Before response');
    const users = await response.json();
    console.log('user resolved');
    return users;
}
console.log('Before calling dj');
let a = dj();
console.log("After calling dj");
console.log(a);
a.then(data => console.log(data));
console.log("Last line of this js file");
