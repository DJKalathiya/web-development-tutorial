console.log("Welcome to 27 OOP tutorial");

// Object Literal for creating objects
let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run: function () {
        console.log("car is running");
    }
}

// we have already seen constructor like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function() {
        console.log(`This car is slower by ${200 - this.topSpeed} Km/h speed then Mecedes`);
    }
}
car1 = new GeneralCar('Nissan', 180);
car2 = new GeneralCar('Maruti Alto', 80);
console.log(car1, car2);