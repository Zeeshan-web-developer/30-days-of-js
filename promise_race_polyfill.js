//promise.race polyfill


//Promise.race method returns a promise that resolves or rejects 
//as soon as one of the promises in an iterable resolves or rejects, 
//with the value or reason from that promise.

Promise.myrace = function (promisesArray) { 
    return new Promise((resolve, reject) => {
        promisesArray.forEach((promise) => {
            promise.then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    });
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 rejected');
    }, 1000);
})

Promise.myrace([promise1, promise2, promise3]).then((result) => {
    console.log(result);
}
).catch((error) => {
    console.error(error);
});

//Expected output: Promise 3 rejected
//Expected output: Promise 2 resolved