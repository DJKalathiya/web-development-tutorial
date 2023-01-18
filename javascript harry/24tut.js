console.log("welcome to date object tutorial 24 in js ");

let today = new Date();
// console.log(today); // show todaye date

let otherDate = new Date('8-4-2003'); //date set
otherDate = new Date('09/08/2002')  //date set
// console.log(otherDate);

otherDate.setHours(12);
otherDate.setMonth(0);
otherDate.setFullYear(2000);
otherDate.setMinutes(1);
otherDate.setSeconds(3);
console.log(otherDate);