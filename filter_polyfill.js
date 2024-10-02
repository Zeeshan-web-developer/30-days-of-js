

Array.prototype.myFilter = function (callback) { 
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function')
    }
    if (!this) {
        throw new TypeError('this is null or not defined')
    }

    const arr = this
    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result

}

const arr = [1, 2, 3, 4]
let callback1 = (item, index, arr) => {
    return item > 2
}
const result = arr.myFilter(callback1)
console.log(result) // [3, 4]