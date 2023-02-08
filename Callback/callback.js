// function myDisplayer() {
//     console.log("Hello");
// }

// function myCalculator(num1, num2, myCallback) {
//     console.log(num1 + num2);
//     myCallback();
// }

// myCalculator(5, 9, myDisplayer);

function myGreet() {
    console.log("Hello");
}

function myPerson(name, myCallback) {
    console.log(name);
    myCallback();
}

myPerson("Jitendra", myGreet);