//Eg - 1
const greet = function(name) {
    return function(m) {

        console.log(`Hi!! ${name}, ${m}`);
    }
}

const greet_message = greet('People');
greet_message("How you doin?")

//Eg - 2
function greet(name) {
    return `Hi!! ${name} `;
}

function greet_name(greeting, message, name) {
    console.log(`${greeting(name)} ${message}`);
}

greet_name(greet, 'Lets code.', 'JavaScript');

//Eg - 3
function greaterThan(n) {
    return m => m > n;
}
let greaterThan5 = greaterThan(5);
console.log(greaterThan5(1));

//Eg - 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterFunction(arr, callback) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    return filteredArr;
}
// Function containing logic for filtering out odd numbers

function isOdd(x) {
    return x % 2 != 0;
}

// Function containing logic for filtering out even numbers

function isEven(x) {
    return x % 2 === 0;
}

console.log(filterFunction(arr, isOdd));
console.log(filterFunction(arr, isEven));