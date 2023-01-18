console.log('welcome to 58 tutorial');

// set store unique values
const mySet = new Set(); //initialize sets

// Adding values to this set
mySet.add('this');
mySet.add('My name');
mySet.add(54);
mySet.add(true);
mySet.add('nice ');
console.log('The set looks like this now: ',mySet);

console.log('Before removel : ',mySet.has(54));
mySet.delete( 54);
console.log('After removel',mySet.has(54));

// iteraing set
for(let item of mySet){
    console.log('Item is : ',item);
}