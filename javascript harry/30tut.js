console.log('This is tutorial 30');

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

// This creates object
let dj = Object.create(proto);
dj.name = "dj";
dj.role = "Programmer";

// This also creates dj object
const dj1 = Object.create(proto, {
    name: { value: "dj" },
    role: { value: "programmer" },
});

dj1.changeName("DJ")
// console.log(dj2);

// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// slogan 
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

let djObj = new Employee("Dj", 345099, 45);
console.log(djObj.slogan());

// programmer
function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let Ankit = new Programmer("Ankit",2,0,"javaScript");
console.log(Ankit);