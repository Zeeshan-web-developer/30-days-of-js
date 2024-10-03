
//Promise.any polyfill
//Promise.any method returns a promise that resolves as soon 
//as one of the promises in the iterable resolves,
//with the value of the first promise that resolves.


Promise.myAny = function (promisesArray) {
    return new Promise((resolve, reject) => {
        let errors = [];
        promisesArray.forEach((promise) => {
            promise.then((result) => {
                resolve(result);
            }).catch((error) => {
                errors.push(error);
                if (errors.length === promisesArray.length) {
                    reject(errors);
                }
            });
        });
    });
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 1 rejected');
    }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 resolved');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 rejected');
    }, 1000);
})

Promise.myAny([promise1, promise2, promise3]).then((result) => {
    console.log(result);
}
).catch((error) => {
    console.error(error);
});