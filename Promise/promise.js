function myDisplayer() {
    console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 5;

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) { myDisplayer(value); },
    function(error) { myDisplayer(error); }
);


// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("successfull"); }, 3000);
// });

// myPromise.then(function(value) {
//     myDisplayer(value);
// });