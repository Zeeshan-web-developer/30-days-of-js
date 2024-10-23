/**
 * @param {number[]} nums
 * @return {number}
 */
//This is Kadance algorithm

var maxSubArray = function(nums) {
    let currentSubArraySum=0;
    let maximumSum=nums[0]
    let len=nums.length
    if(len==1) return nums[0]

    for(let i=0;i<len;i++){
        currentSubArraySum=currentSubArraySum+nums[i];
        maximumSum=Math.max(maximumSum,currentSubArraySum)
    if(currentSubArraySum<0){
        currentSubArraySum=0
    }
    
    }
    return maximumSum
};