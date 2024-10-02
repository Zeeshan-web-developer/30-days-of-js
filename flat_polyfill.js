


const flattedArray = [[1, [2], [3], [4], [[5], [6, [7], [8], 9], 10]]];

 
Array.prototype.myflat = function (depth = 1) { 

    if(!this){
        throw new TypeError('this is null or not defined')
    }
    if(this.length === 0){
        throw new TypeError('Array is empty')
    }

    const arr = this

    const result = []

    const flatArray = (arr, depth) => {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && depth > 0) {
                flatArray(arr[i], depth - 1)
            } else {
                result.push(arr[i])
            }
        }
    }
    flatArray(arr, depth)
    return result


}

const result = flattedArray.myflat(Infinity)
console.log(result) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
