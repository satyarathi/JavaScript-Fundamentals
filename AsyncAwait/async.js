// Eg-1
// function myDisplayer() {
//     console.log("some");
// }

// async function myFunction() {

//     setTimeout(() => {
//         console.log("Hello");

//     }, 3000);

// }
// myFunction().then(
//     function(value) { myDisplayer(value); }
// );

// Eg-2
// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }

// f().then(function(result) {
//     console.log(result)
// });

// Eg-3

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('Promise resolved')
//     }, 4000);
// });


// async function asyncFunc() {

//     let result = await promise;

//     console.log(result);
//     console.log('hello');
// }

// asyncFunc();

// Eg-4
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);

// }

// asyncCall();

// Eg-5

const movies = [
    { title: `A New Hope`, body: `After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader.` },
    { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. ` }
]

function getMovies() {
    setTimeout(() => {
        movies.forEach((movie) => {
            console.log(movie.title)
        })
    }, 1000);
}

getMovies();