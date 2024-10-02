
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

//using Map
// var TimeLimitedCache = function() {
// this.cache=new Map()
    
// };

// /** 
//  * @param {number} key
//  * @param {number} value
//  * @param {number} duration time until expiration in ms
//  * @return {boolean} if un-expired key already existed
//  */
// TimeLimitedCache.prototype.set = function(key, value, duration) {
   
//     //return true if key same un-expired key already exists return false otherwise
//     const alreadyExists=this.cache.get(key);

//     //key and value should be overwitten if key exists
//     if(alreadyExists){
//      clearTimeout(alreadyExists.timeoutid)
//     }

    
//     let timeoutid=setTimeout(()=>{
//         this.cache.delete(key) //if time elapsed key should be inaccessible //delete key
//     },duration)
//     this.cache.set(key,{value,timeoutid})

//     return Boolean(alreadyExists)

// };

// /** 
//  * @param {number} key
//  * @return {number} value associated with key
//  */
// TimeLimitedCache.prototype.get = function(key) {
//     if(this.cache.has(key))
//     return this.cache.get(key).value
//     return -1
// };

// /** 
//  * @return {number} count of non-expired keys
//  */
// TimeLimitedCache.prototype.count = function() {
//     return this.cache.size;
// };

// /**
//  * const timeLimitedCache = new TimeLimitedCache()
//  * timeLimitedCache.set(1, 42, 1000); // false
//  * timeLimitedCache.get(1) // 42
//  * timeLimitedCache.count() // 1
//  */



//using Object
var TimeLimitedCache = function() {
this.cache={};    
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
 const exists=this.cache[key]
    if(exists){
      clearTimeout(exists.timeout)
    }
    
    const timeout=setTimeout(()=>{
      delete this.cache[key]
    },duration)

    this.cache[key]={value:value,timeout:timeout}
 return  Boolean(exists)

};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.cache[key])
    return this.cache[key].value
    return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {

  let length=Object.keys(this.cache).length
    return length
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */