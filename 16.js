// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".


/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
       return new Promise((resolve,reject)=>{
           
           //wait for t seconds if not resolved
            setTimeout(()=>{
            reject("Time Limit Exceeded")
            },t)
            //try to resolve--if not resolved till t seconds then run above code
        fn(...args).then((res)=>{
            resolve(res)
        }).catch((err)=>reject(err))
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */