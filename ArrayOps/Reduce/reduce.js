// Eg - 1
let result = 0;
const numbers = [7, 2, 8, 4];
const sum = numbers.reduce(myFunction);

function myFunction(result, item) {
    return result + item;
}
console.log(sum);

// Eg - 2
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet) {
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts);