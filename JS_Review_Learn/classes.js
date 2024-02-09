// classes

class User{
    constructor(name = "No Name", age = null){
        this.name = name;
        this.age = age;
    };

    display(){
        console.log(this.name + ' is ' + this.age + ' years old');
    }
    set(name, age){
        this.name = name;
        this.age = age;
    }
    setHealth(health){
        this.health = health;
    }
    firstName(){
        return this.name.split(' ')[0];
    }
    lastName(){
        return this.name.split(' ')[1];
    }
}

let user1 = new User('Jack Paul', 25);
console.log(user1);
user1.display();

let user2 = new User;

user1.set('John', 26);
user1.display();
user2.display();

user1.setHealth('good');
console.log(user1);

user1.set("Simon Tilly")
console.log(user1.firstName());
console.log(user1.lastName());

// subclass
class Admin extends User{
    constructor(name, age, role){
        super(name, age);
        this.role = role;
    }
    display(){
        console.log(this.name + ' is ' + this.age + ' years old and is an ' + this.role);
    }
}

let admin1 = new Admin('Jack Paul', 25, 'admin');
console.log(admin1);
admin1.set('John Alan', 26);
admin1.display();



// challenge
/*
create class vehicle
inherit bicycle and car
give them properties
use super
*/

class Vehicle{
    constructor(wheels = 0, color = ""){
        this.wheels = wheels;
        this.color = color;
    }
    display(){
        console.log('This vehicle has ' + this.wheels + ' wheels and is ' + this.color);
    }
}

class Bicycle extends Vehicle{
    constructor(wheels, color, gears){
        super(wheels, color);
        this.gears = gears;
    }
    display(){
        console.log('This vehicle has ' + this.wheels + ' wheels and is ' + this.color + ' and has ' + this.gears + " gears.");
    }
}

class Car extends Vehicle{
    constructor(wheels, color, doors){
        super(wheels, color);
        this.doors = doors;
    }
    display(){
        console.log('This vehicle has ' + this.wheels + ' wheels and is ' + this.color + ' and has ' + this.doors + ' doors');
    }
}

let vehicle1 = new Vehicle();
vehicle1.display();

let bicycle1 = new Bicycle(2, 'blue', 5);
bicycle1.display();

let car1 = new Car(4, 'black', 4);
car1.display();


