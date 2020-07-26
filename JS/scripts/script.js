// var x = 10;
// document.write(x);
// var srt1 = "Hello, ",
//     str2 = "World!";
// document.write("<h2>Holla!</h2>");
// var h1 = "<h1>Super!</h1>";
// document.write(h1);

// // Всплывающие окна
// // alert("Hi!");
// // confirm("Are you ready?");
// // prompt("what cite you like ?");

// // Логирование в консоль
// // console.log("test");
// // console.error("Error!");
// // console.warn("Warning!");

// /* Анкета
// var x = confirm("Are you ready?");
// var name = prompt("Please, type your name:");
// var surname = prompt("Please, type your surname:");
// var age = prompt("Please, type your age:");
// var address = prompt("Please, type your address:");
// var gender = prompt("Please, type your gender:");
// document.write("<h1>Анкета:</h1>");
// document.write("<p>Name: <b>" + name + "</b></p>");
// document.write("<p>Surname: <b>" + surname + "</b></p>");
// document.write("<p>Age: <b>" + age + "</b></p>");
// document.write("<p>Address: <b>" + address + "</b></p>");
// document.write("<p>Gender: <b>" + gender + "</b></p>");
// */

// //Калькулятор
// // var x= prompt("Please, input x:");
// // var y= prompt("Please, input y:");
// // x=+x;
// // y=+y;

// // Object's

// // var person = {
// //   name: "John",
// //   age: 21,
// //   favColor: "blue",
// //   height: 198,
// // }; // Создание 1 объекта через литерал , только для одиночных объектов.
// // document.write(person.age);

// function person(name, age, color, height) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//     this.height = height;
//     this.changeName = function (name) {
//         this.name = name;
//     }; // 1 метод объявления функции
//     this.yearofBirth = bornYear; // 2 способ
//     this.writeName = writeName;
// }

// function bornYear() {
//     return 2020 - this.age; // 2 способ
// }

// function writeName() {
//     document.write(this.name);
// }

// var p1 = new person("Max", 22, "green", 184);
// var p2 = new person("Andrey", 23, "red", 156);
// p1.changeName("John");
// document.write(p1.name);
// p2.writeName();

// // Arrays
// var courses = new Array("JS", "Html", "Css", "Java", "C++"); // 1 способ создания массива
// var course = courses[0];
// var courses1 = new Array(3); // 2 способ создания массива
// courses1[0] = "Php";
// courses1[1] = "C";
// courses1[2] = "Kotlin";
// courses1[3] = "Ruby";
// var courses2 = courses1.concat(courses);
// var pers = []; // empty array
// pers["name"] = "Max";
// pers["age"] = 32; // Now it's object not array.
// document.write(pers["age"]);
// // person.age=person['age'] or person["age"]

// //Math
// document.write("<h1>" + Math.PI + "</h1>");
// document.write("<h1>" + Math.LOG10E + "</h1>");
// document.write("<h1>" + Math.sqrt(16) + "</h1>");
// document.write("<h1>" + Math.ceil(Math.random() * 10) + "</h1>");

// // Date
// // function myAlert() {
// //     alert("Hi!");
// // }
// // setInterval(myAlert, 3000);
// var d1 = new Date(86400000);
// var d2 = new Date("January 2, 2020 10:32:00");
// var d3 = new Date(92, 2, 26, 04, 20, 0, 0);
// var d4 = new Date();

// function printTime() {
//     var d = new Date();
//     var hours = d.getHours();
//     var mins = d.getMinutes();
//     var secs = d.getSeconds();
//     document.body.innerHTML = hours + ":" + mins + ":" + secs;
// }
// setInterval(printTime, 1000); //timer

// Choise element
// document.getElementById(id)
// document.getElementsByClassName(name) -Array
// document.getElementsByTagName(name) - Array
// var elem = document.getElementById("h1");
// elem.innerHTML = "Hello everyone";
// var par = document.getElementsByTagName("p");
// for (var x = 0; x < par.length; x++) {
//     par[x].innerHTML = "Holla!";
// }

// Add, replace and delete elements
// var div1 = document.createElement("div");
// var nod = document.createTextNode("HI!");
// div1.appendChild(nod);
// var div = document.getElementsByClassName("first");
// div[0].appendChild(div1); // It's array!!!
// div1.parentElement.removeChild(div1); //Delete element div1
// var p1 = document.createElement("p");
// var nod1 = document.createTextNode("JS is cool!");
// p1.appendChild(nod1);
// var p2 = document.getElementById("par3");
// div[0].replaceChild(p1, p2);
// p1.class = "par"; // ? not work?!
// p1.id = "par3";
// p1.style.backgroundColor = "green";
// p1.style.color = "red";

//Animation
var pos = 0;
var box = document.getElementById("box");

function move() {
  if (pos >= 150) {
    clearInterval(t);
  } else {
    pos += 1;
    box.style.left = pos + "px";
    box.style.top = pos + "px";
  }
}
var t;
t = setInterval(move, 50);
var but = document.getElementById("but");
var p = document.createElement("p");
var butBack = document.createElement("button");
var nod = document.createTextNode("Back!");
butBack.appendChild(nod);
p.innerHTML = Date();
but.onclick = function () {
  but.parentElement.replaceChild(p, but);
  p.appendChild(butBack);
};
butBack.onclick = function () {
  butBack.parentElement.removeChild(butBack);
  p.parentElement.removeChild(p);
  document.body.appendChild(but);
};

// Slider
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var image = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
var num = 0;
next.onclick = function () {
  var slider = document.getElementById("test");
  num++;
  if (num >= image.length) {
    num = 0;
  }
  slider.src = image[num];
};
prev.onclick = function () {
  var slider = document.getElementById("test");
  num--;
  if (num < 0) {
    num = image.length - 1;
  }
  slider.src = image[num];
};

// Validate
function validate() {
  var n1 = document.getElementById("num1");
  var n2 = document.getElementById("num2");
  if (n1.value != "" && n2.value != "") {
    if (n1.value == n2.value) {
      return true;
    }
  }
  alert("The value should be equal and blank!");
  return false;
}

// var, let, const
// const нельзя переопределять
let name = "David";
let msg = `Welcome ${name}`;
console.log(msg);
let a = 9;
let b = 10;
let sum = `The sum is ${a + b}`;
console.log(sum);

// Циклы в Ecma2015
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let x in obj) {
  console.log(x);
}
let list = ["x", "y", "z"];
for (let x of list) {
  console.log(x);
}
for (let x of "Full Time Job") {
  console.log(x);
}

// Function in JS6
const add = (x, y) => {
  let sum = x + y;
  console.log(sum);
};
add(2, 4);
const welcome = (x) => "Welcome " + x;
console.log(welcome("Max"));
const x = () => console.log("Hi!");
x();
var arr = [1, 2, 4, 6]; //= const arr = [1,2,4,6]
arr.forEach((v) => {
  console.log(v * 2);
}); // =arr.forEach(function(el){console.log(el*2);});
const test = (a, b = 10, c = 22) => {
  // b и с значения по умолчанию
  return a + b + c;
};
console.log(test(2, 2, 3));

// object in js6
let tree = {
  height: 10,
  color: "green",
  age: 240,
  grow() {
    this.height += 2;
    this.age += 10;
  },
};
tree.grow();
console.log(tree.height, tree.age);

//alternative obj
let height = 165;
let weight = 66;
let alternate = {
  height,
  weight,
};

// вычисляемые значения
let prop = "name";
let id = "1234";
let mobile = "890012312";
let user = {
  [prop]: "Ban",
  [`user_${id}`]: `${mobile}`,
};
var i = 0;
var ama = {
  [`foo` + ++i]: i,
  [`foo` + ++i]: i,
  [`foo` + ++i]: i,
};
var param = "size";
var config = {
  [param]: 12,
  [`mobile` + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};
console.log(config);

// Object.assign ES6
let person = {
  name: "Karl",
  age: 22,
  sex: "male",
}; // Исходник для создания подобных объектов (рыба)
let student = {
  name: "Brain",
  age: 20,
  xp: 3,
};
let newStudent = Object.assign({}, person, student);
// mutate! don't use it if it possible!
let newPerson = person;
newPerson.name = "Pol";
console.log(person.name); //Pol
console.log(newPerson.name); // Pol

// Use this
let newPerson1 = Object.assign({}, person);
newPerson1.name = "Paul";
console.log(person.name); //Pol
console.log(newPerson1.name); // Pol
let newPerson2 = Object.assign({}, person, {
  name: "Mike",
});
console.log(newPerson2);

// destruction
let arr1 = ["1", "2", "3"];
let [one, two, three] = arr1;

let arr2 = () => {
  return [1, 2, 4];
};
let [uno, , tres] = arr2();
let a1,
  b1,
  c1 = 9,
  d1 = 5;
[a1, b1 = 4] = [2];
[c1, d1] = [d1, c1];

//destruction object
let obj1 = {
  h: 199,
  w: true,
};
let { h, w } = obj1;

let a2, b2;
({ a2, b2 } = { a2: "Hello ", b2: "Jack" });

var obj2 = { hi1: 134, w1: true };
var { hi1: foo, w1: bar } = obj2; // hi1 calls error and w1 too
// foo=134, bar=true

var obj3 = { id3: 23, name3: "Max" };
let { id3 = 10, age3 = 20 } = obj; // id=10,age=20.
var buySomeBread = (eggs) => {
  return eggs ? 10 : 1;
};
console.log(buySomeBread(true));
