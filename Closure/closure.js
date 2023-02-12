// Eg -1
function makeFunc() {
    const name = "akshay";

    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

// Eg - 2
function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;

    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber;
}

var number = numberGenerator();
number();