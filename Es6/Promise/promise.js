function myDisplayer(some) {
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