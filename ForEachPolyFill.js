
Array.prototype.myForEach = function(callback)  {
    
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
    console.log(this,arr)
    
    for(let i=0;i<arr.length;i++){
        callback(arr[i],i,arr)
    }
}

const arr = []
arr.myForEach((item, index, arr) => {
    console.log(item, index, arr)
})
