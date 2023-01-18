console.log("Welcome to 31 tutorial");

class Employee{
    constructor(name,  givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }
    joiningYear(){
        return 2020 - this.experience;
    }
    static add(a,b){
        return a + b;
    }
}

class Programmer{
    constructor(givenName,  givenExperience, givenDivision,language,github){
        super(givenName,givenExperience,givenDivision);
        this.language = language;
        this.github = github;
    }
    static favoriteLanguage(){
        if(this.language == 'python'){
            return 'Python';
        }
        else{
            return javaScript;
        }
    }
    static multiply(a,b){
        return a*b;
    }
}

// let dj = new Employee("dj",56,"Experience");
// console.log(dj);

dj = new Programmer("Darshan",3,"Lays","Go","Rohan420")
console.log(dj);
console.log(dj.favoriteLanguage())
console.log(Programmer.multiply(5,7))