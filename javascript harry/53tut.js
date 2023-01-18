console.log("welcome genrator 53 tutotail");

// Generators in Javascript
function* numbersGen() {
    let i = 0;

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    // while(true){
    //     yield i++;
    // }
}
const gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());