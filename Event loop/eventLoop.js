//Eg - 1
function main() {
    console.log('A');
    setTimeout(
        function display() { console.log('B'); }, 0);
    console.log('C');
}
main();


// Eg - 2
console.log("Before delay");

function delayBySeconds(sec) {
    let start = now = Date.now()
    while (now - start < (sec * 1000)) {
        now = Date.now();
    }
}

delayBySeconds(3);

// Executes after delay of 5 seconds
console.log("After delay");