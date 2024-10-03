
//Promise.all polyfill
Promise.myall=function(promises){
    return new Promise((resolve,reject)=>{
        let results=[];
        let completedPromises=0;
        promises.forEach((promise,index)=>{
            promise.then((result)=>{
                results[index]=result;
                completedPromises++;
                if(completedPromises===promises.length){
                    resolve(results);
                }
            }).catch((error)=>{
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
        resolve('Promise 3 resolved');
    }, 1000);
})

Promise.myall([promise1, promise2, promise3]).then((results) => {
    console.log(results);
}
).catch((error) => {
    console.error(error);
});



