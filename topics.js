//switch
const dayNumber = 3;

switch(dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// 2
const signal = "yellow";

switch(signal.toLowerCase()) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}
//3
const option = 2;

switch(option) {
  case 1:
    console.log("You selected: View Profile");
    break;
  case 2:
    console.log("You selected: Edit Profile");
    break;
  case 3:
    console.log("You selected: Logout");
    break;
  default:
    console.log("Invalid option");
}
//4
const month = 12;

switch(month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;

  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid month number");
}


// Types of Loops in JS

//For,while,dowhile,forof,forin,break and continue

//for
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("----------------------------------------------");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum:", sum);
console.log("----------------------------------------------");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
console.log("----------------------------------------------");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("----------------------------------------------");

//while
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
console.log("----------------------------------------------");

let b = 1;
while (i <= 10) {
  console.log(i);
  i += 2;
}

console.log("----------------------------------------------");
let n = 5;
let fact = 1;
while (n > 0) {
  fact *= n;
  n--;
}
console.log("Factorial:", fact);

console.log("----------------------------------------------");
//forof
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

console.log("----------------------------------------------");

//Functions in JavaScript

function su(a, b) {
  return a + b;
}
console.log(su(2, 3));

console.log("----------------------------------------------");

function greet(name) {
  console.log("Hello " + name);
}
greet("Vishnu");

console.log("----------------------------------------------");

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); 

console.log("----------------------------------------------");

//pass by value pass by reference

let x = 10;
function change(val) {
  val = 20;
}
change(x);
console.log(x); // pass by value

console.log("----------------------------------------------");

let obj = { name: "Vishnu" };
function update(o) {
  o.name = "Yadav";
}
update(obj);
console.log(obj.name); // pass by reference

console.log("----------------------------------------------");

let arr = [1, 2];
function modify(arrRef) {
  arrRef.push(3);
}
modify(arr);
console.log(arr); // array reference

console.log("----------------------------------------------");

//Anonymous functions

const sayHi = function() {
  console.log("Hi!");
};
sayHi();//assigned to value
console.log("----------------------------------------------");
setTimeout(function () {
  console.log("Executed after 1 sec");
}, 1000);

console.log("----------------------------------------------");
let nums = [1, 2, 3];
let doubled = nums.map(function(n) {
  return n * 2;
});
console.log(doubled); // [2, 4, 6]

//Passing Parameters

function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3));

console.log("----------------------------------------------");

function greet(name = "Guest") {
  console.log("Welcome", name);
}
greet(); // Welcome Guest

console.log("----------------------------------------------");

function sumAll(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sumAll(1, 2, 3, 4)); // 10

console.log("----------------------------------------------");

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const inc = counter();
inc(); inc(); inc(); // 1, 2, 3

console.log("----------------------------------------------");

function secret() {
  let msg = "Hidden";
  return function () {
    return msg;
  };
}
const getSecret = secret();
console.log(getSecret()); // Hidden

console.log("----------------------------------------------");

for (var k = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}

//multiple inheritence
const fly = {
  fly() {
    console.log("Can fly");
  }
};

const swim = {
  swim() {
    console.log("Can swim");
  }
};

const birdFish = Object.assign({}, fly, swim);
birdFish.fly(); // Can fly
birdFish.swim(); // Can swim

//using mix
function mix(...sources) {
  return Object.assign({}, ...sources);
}

const eat = {
  eat() {
    console.log("Eating...");
  }
};

const sleep = {
  sleep() {
    console.log("Sleeping...");
  }
};

const creature = mix(eat, sleep);
creature.eat();
creature.sleep();

//protypical relationships
function Animal() {}
Animal.prototype.eat = function() {
  console.log("Eating...");
};

const dog = new Animal();
dog.eat();

//object.create
const animal = {
  speak() {
    console.log("Animal speaks");
  }
};

const cat = Object.create(animal);
cat.speak();

//inherintg methods
//class
class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {}

const myCar = new Car();
myCar.start();

//prototype chain
function Parent() {}
Parent.prototype.greet = function() {
  console.log("Hello!");
};

const child = new Parent();
child.greet();

//using object.create
const base = {
  describe() {
    console.log("Describing...");
  }
};

const derived = Object.create(base);
derived.describe();

//get and set

const person = {
  firstName: "Vishnu",
  lastName: "Yadav",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
};

console.log(person.fullName);
person.fullName = "Ram Sharma";
console.log(person.fullName);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

const box = new Rectangle(10, 20);
console.log(box.area); // 200

//object inherting from object and function
//object
const anima = { eats: true };
const rabbit = Object.create(anima);
rabbit.hops = true;

console.log(rabbit.eats); // true

//function
function Dog(name) {
  this.name = name;
}
Dog.prototype.bark = function() {
  console.log(this.name + " says Woof!");
};

const tommy = new Dog("Tommy");
tommy.bark();


//set and map

const ids = new Set();
ids.add(101);
ids.add(102);
ids.add(101); // Duplicate won't be added
console.log(ids); // Set {101, 102}

const numbers = [1, 2, 3, 2, 4, 1];
const unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4]

const scores = new Map();
scores.set("Vishnu", 95);
scores.set("Ankit", 87);
console.log(scores.get("Vishnu")); // 95

const objKey = {};
const map = new Map();
map.set(objKey, "value for object key");
console.log(map.get(objKey));






