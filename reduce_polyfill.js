

Array.prototype.myReduce = function (callback, initialValue=null) { 

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function')
    }
    if (!this) {
        throw new TypeError('this is null or not defined')
    }

    const arr = this

    let accumulator = initialValue

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr)
    }
    return accumulator
}

const arr = [1, 2, 3, 4]
let callback1 = (accumulator, item, index, arr) => {
    return accumulator + item
}
const result = arr.myReduce(callback1, 0)
console.log(result) // 10