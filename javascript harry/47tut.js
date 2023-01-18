// console.log('Welcome to regular exprission tutorial');

// let regex = /Darshan/;
// // lets look into some metch character symbol
// regex = /^Darsh/; //means expression will match if string start with this 
// regex = /Darshan$/ //ends wit this string

// let str = "Darshan is very good Boy.";

// here 48 tutorial

// let regex = /da[ryu]shan/;   //if match with any 3 character;
// regex = /da[a-z]shan/;   //if match with a to z character;
// regex = /da[^aty]rshan/; // canonot be  a,t,y
// const str = "darshan bhai";

// let result = regex.exec(str);
// console.log("The result from exec is ".result);

// if (regex.test(str)) {
//     console.log(`The string ${str} matches the expression ${regex.source}`);
// } else {
//     console.log(`The string ${str} does not match the expression ${regex.source}`);
// }

// Here 49 tutorial

console.log("This is tutorial 49");

// character classes
let regex = /\war/; //word charcter - _ or alphabet or number
regex = /\w+an/;  // \w+ means one or more word character
regex = /\wbhai/ // no word charcter
// same as use W,d,D,s,S insted of w but differnt rules



str = "darshan bhai";

let result = regex.exec(str);
console.log("The result from exec is ".result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}