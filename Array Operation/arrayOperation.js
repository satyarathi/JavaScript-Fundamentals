let myCars = ["mercedes", "audi", "tesla", "bmw", "pagani"];
let phantom = "rolls-royse";

//pop- removing the last array element and returns the value that was "popped out".
myCars.pop();
myCars.pop();

//push- adding elements at the last and returns the new array length.
myCars.push("ford");
myCars.push("scoda");
myCars.push(35);

//shift - removing first array element and returns the value that was "shifted out".
myCars.shift();
myCars.shift();

// unshift - adding the element at the beginning and returns the new array length.
myCars.unshift("nissan");
myCars.unshift(phantom);
myCars.unshift(true);

myCars.toString();

console.log(myCars);