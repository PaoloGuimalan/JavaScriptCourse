// console.log("Hello World!");

const myPromise = new Promise((callback, resolve) => {
    callback();
})

myPromise.then(() => {
    console.log("Hello World!")
}).then(() => {
    console.log("Hello Promises")
}).then(() => {
    return "Hello Finished!";
}).then((data) => {
    console.log(data);
})
