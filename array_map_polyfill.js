
Array.prototype.myMap=function(callback){
    if(typeof callback !== 'function'){
        throw new TypeError(callback + ' is not a function')
    }
    if(!this){
        throw new TypeError('this is null or not defined')
    }
    if(this.length === 0){
        throw new TypeError('Array is empty')
    }

    const arr = this
    const result=[]
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i],i,arr))
    }
    return result
}

const arr = [1, 2, 3, 4]
let callback1 = (item, index, arr) => {
    return item * 2
}
const result = arr.myMap(callback1)
console.log(result) // [2, 4, 6, 8]

