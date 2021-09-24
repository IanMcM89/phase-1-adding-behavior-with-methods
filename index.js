class Cat{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
       return `${this.name} says meow!`;
    }
}

class Dog{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says woof!`;
    }
}

class Bird{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(sex){
        if(this.sex === 'male'){
            return `It\'s me! ${this.name}, the parrot!`;
        } else {
            return `${this.name} says squawk!`;
        }
    }
}

let cat = new Cat('Apollo', 'male');

let dog = new Dog('Kali', 'female');

let birdM = new Bird('Oscar', 'male');

let birdF = new Bird('Mindy', 'female');

console.log(cat.speak());
console.log(dog.speak());
console.log(birdM.speak());
console.log(birdF.speak());