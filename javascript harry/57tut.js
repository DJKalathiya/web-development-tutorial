console.log("Welcome to 57 tutorial");

// maps in javascript: we can use any type of key or value
const myMap = new Map();

const key1 = 'myStr',key2 ={},key3 = function(){};

// setting map values
myMap.set(key1,'This is a string');
myMap.set(key2,'This is a blank object');
myMap.set(key3,'This is an empty function');
console.log(myMap);

// Getting the value from a map
let value1 = myMap.get(key3);
console.log(value1);

// Get the size of the map
console.log(myMap.size);

// you can loop through a map using for each loop
myMap.forEach((value,key)=>{
    console.log('Key is ',key);
    console.log('Value is ', value);
})


// converting map to an  array
let myArray = Array.from(myMap);
console.log('Map to array is ',myArray);

// converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log('Map to keys array is ', myKeysArray);

// converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is ', myValuesArray);