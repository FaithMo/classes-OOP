class Person {

    constructor(name, age, gender, interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    hello(){
        return "Hello, my name is " + this.name + " and I am " + this.age + " years old. My interests are " + this.interests + ".";
    }

}

var firstPerson = new Person("Leo", 25, "male", ["drawing", "coding", "reading", "playing FIFA"]);
var secondPerson = new Person("Mary", 15, "female", ["singing", "acting", "reading", "playing dolls"]);

console.log(firstPerson);
console.log(firstPerson.hello());