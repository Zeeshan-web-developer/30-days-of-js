/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let PrefeixArray=[];
    let suffixArray=[];
    let finalArray=[];

    for(let i=0;i<nums.length;i++){
        if(PrefeixArray.length<=0){
            PrefeixArray.push(1)

        }
        else{
            PrefeixArray.push(PrefeixArray[i-1]*nums[i-1])

        }
    }
    for(let j=nums.length-1;j>=0;j--){
        if(suffixArray.length<=0){
            suffixArray.push(1)

        }
        else{
            suffixArray.unshift(suffixArray[0]*nums[j+1])

        }
    }

    for(let k=0;k<nums.length;k++){
      finalArray.push(PrefeixArray[k]*suffixArray[k])  
    }
    return finalArray
    
};