let x = 1;
for (let i = 1; i <= 100; i++) {
  if (x % 3 == 0 && x % 5 != 0) {
    console.log("Fizz");
  } else if (x % 5 == 0 && x % 3 != 0) {
    console.log("Buzz");
  } else if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
  x++;
}
let size = 10;
let counter = 0;
let line1 = " #";
let line2 = "# ";
do {
  line1 += " #";
  line2 += "# ";
  counter++;
} while (counter < size / 2 - 1);

for (let i = 1; i <= size; i++) {
  if (i % 2 == 0) {
    console.log(line2);
  } else {
    console.log(line1);
  }
}
const square = function (x) {
  return x ** 2;
};
console.log(square(12));
let vichitanie = function (a, b) {
  if (b === undefined) return -a;
  else return a - b;
};
function sqrt(base, exponent = 2) {
  return base ** exponent;
}

let wrapValue = (n) => {
  let local = n;
  return () => local;
};
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
  return (number) => number * factor;
}
let twice = multiplier(2);
console.log(twice(4));

// Рекурсия на поиск последовательности действий на получение введеного числа
// через действия *3 или +5
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history}+5)`) ||
        find(current * 3, `(${history}*3)`)
      );
    }
  }
  return find(1, "1");
}
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}
function printFarmInventory(cows, chikens, pigs) {
  console.log(`${zeroPad(cows, 3)} cows`);
  console.log(`${zeroPad(chikens, 3)} chikens`);
  console.log(`${zeroPad(pigs, 3)} pigs`);
}

function min(a, b) {
  if (a > b) return b;
  else return a;
}

function ezEven(a) {
  if (a > 0) {
    if (a == 0) return true;
    else if (a == 1) return false;
    else return ezEven(a - 2);
  } else return null;
}
function countBs(string, chars) {
  let counter = 0;
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] == chars) counter++;
  }
  return counter;
}
let arrNew = [1, 2, 3, 4];
arrNew.pop();
arrNew.push(5);
console.log(arrNew);

let objectA = {
  a: 1,
  b: 2,
};
let objC = Object.assign(objectA, { b: 3, c: 4 });
console.log(objC);
delete objC.c;
console.log(objC.c);
console.log(Object.keys(objC));
console.log(typeof arrNew);
objC.c = 3;
console.log(objC);
let objA = { value: 10 };
let objB = objA;
let objD = { value: 10 };

objB.value = 15;
console.log(objA, objB);
objD.value = 15;
console.log(objA == objD);

let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask(task) {
  todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
console.log([0, 1, 2, 3, 4, 5].slice(2, 4));
console.log("кокосы".slice(2, 6)); // 'косы'
console.log("кокосы".indexOf("сы")); // 4
console.log("  Hi man\n  ".trim()); // 'Hi man'
console.log(String(6).padStart(3, "0")); // 006
console.log("ha".repeat(4)); // hahahaha

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(3, 5, 0, -9));
let numbers = [1, 6, 3];
console.log(max(...numbers));
