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
