
//Promise.allSettled polyfill

//Promise.allSettled method returns a promise that resolves after all of the given promises 
//have either resolved or rejected, with an array of objects that each describes the outcome 
//of each promise.
Promise.myAllSettled = function (promisesArray) { 
    return new Promise((resolve, reject) => {
        let results = [];
        let completedPromises = 0;
        promisesArray.forEach((promise, index) => {
            promise.then((result) => {
                results[index] = { status: 'fulfilled', value: result };
                completedPromises++;
                if (completedPromises === promisesArray.length) {
                    resolve(results);
                }
            }).catch((error) => {
                results[index] = { status: 'rejected', reason: error };
                completedPromises++;
                if (completedPromises === promisesArray.length) {
                    resolve(results);
                }
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

Promise.myAllSettled([promise1, promise2, promise3]).then((results) => {
    console.log(results);
}
).catch((error) => {
    console.error(error);
});