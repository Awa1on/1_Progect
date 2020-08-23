let x = 1;
for (let i = 1; i <= 100; i++) {
    if (x % 3 == 0 && x % 5 != 0) {
        console.log('Fizz');
    } else if (x % 5 == 0 && x % 3 != 0) {
        console.log('Buzz');
    } else if (x % 3 == 0 && x % 5 == 0) {
        console.log('FizzBuzz');
    } else {
        (console.log(i));
    }
    x++;
}
let size = 10;
let counter = 0;
let line1 = ' #';
let line2 = '# ';
do {
    line1 += ' #';
    line2 += '# ';
    counter++;
} while (counter < (size / 2 - 1));

for (let i = 1; i <= size; i++) {
    if (i % 2 == 0) {
        console.log(line2);
    } else {
        console.log(line1);
    }
};
const square = function (x) {
    return x ** 2;
}
console.log(square(12));