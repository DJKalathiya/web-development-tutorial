console.log("Welcome to 56 tutotial");

let people = ["darshan","ankit","jay","hardik","sanjay"];

obj = {
    name: "darshan",
    language: "JavaScript",
    hobbies: "web development"
}

// ************ for in loop **************

// Iterating an object using for in loop
// for(let key in obj){
//     console.log(obj[key]);
// }

// Iterating object using string
myString = "This is my string";
// for(let char in myString){
//     console.log(myString[char]);
// }


// ************** for of loop **************
for(let name of people){
    console.log(name);
}
for(let name1 of myString){
    console.log(name1);
}