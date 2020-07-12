var x = 10;
document.write(x);
var srt1 = "Hello, ",
  str2 = "World!";
document.write("<h2>Holla!</h2>");
var h1 = "<h1>Super!</h1>";
document.write(h1);

// Всплывающие окна
// alert("Hi!");
// confirm("Are you ready?");
// prompt("what cite you like ?");

// Логирование в консоль
// console.log("test");
// console.error("Error!");
// console.warn("Warning!");

/* Анкета
var x = confirm("Are you ready?");
var name = prompt("Please, type your name:");
var surname = prompt("Please, type your surname:");
var age = prompt("Please, type your age:");
var address = prompt("Please, type your address:");
var gender = prompt("Please, type your gender:");
document.write("<h1>Анкета:</h1>");
document.write("<p>Name: <b>" + name + "</b></p>");
document.write("<p>Surname: <b>" + surname + "</b></p>");
document.write("<p>Age: <b>" + age + "</b></p>");
document.write("<p>Address: <b>" + address + "</b></p>");
document.write("<p>Gender: <b>" + gender + "</b></p>");
*/

//Калькулятор
// var x= prompt("Please, input x:");
// var y= prompt("Please, input y:");
// x=+x;
// y=+y;

// Object's

// var person = {
//   name: "John",
//   age: 21,
//   favColor: "blue",
//   height: 198,
// }; // Создание 1 объекта через литерал , только для одиночных объектов.
// document.write(person.age);

function person(name, age, color, height) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.height = height;
  this.changeName = function (name) {
    this.name = name;
  }; // 1 метод объявления функции
  this.yearofBirth = bornYear; // 2 способ
  this.writeName = writeName;
}

function bornYear() {
  return 2020 - this.age; // 2 способ
}

function writeName() {
  document.write(this.name);
}

var p1 = new person("Max", 22, "green", 184);
var p2 = new person("Andrey", 23, "red", 156);
p1.changeName("John");
document.write(p1.name);
p2.writeName();

// Arrays
var courses = new Array("JS", "Html", "Css", "Java", "C++"); // 1 способ создания массива
var course = courses[0];
var courses1 = new Array(3); // 2 способ создания массива
courses1[0] = "Php";
courses1[1] = "C";
courses1[2] = "Kotlin";
courses1[3] = "Ruby";
var courses2 = courses1.concat(courses);
var pers = []; // empty array
pers["name"] = "Max";
pers["age"] = 32; // Now it's object not array.
document.write(pers["age"]);
// person.age=person['age'] or person["age"]
