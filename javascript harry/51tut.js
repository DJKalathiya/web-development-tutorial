console.log('Welcome to 51 tutorial');

function fruitsIterator(values) {
    let nextIndex = 0;
    // we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // we will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            } else {
                // we wil return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}

const myArray = ["Applea", "Graps", "Oranges", "Bhindi"];
console.log("My array is ", myArray);

// using the iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);