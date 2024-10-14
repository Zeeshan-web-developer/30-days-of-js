
/*
Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
 let prefixsum=1;
 let suffixSum=1;
 let solution=nums[0]
  
  for(let i=0;i<nums.length;i++){
    prefixsum=prefixsum==0?1:prefixsum
   suffixSum=suffixSum==0?1:suffixSum


   prefixsum=nums[i]*prefixsum;
   suffixSum=nums[nums.length-i-1]*suffixSum

  

   solution=Math.max(solution,Math.max(prefixsum,suffixSum))
     
  }
  
  return solution
};