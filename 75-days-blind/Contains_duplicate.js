var containsDuplicate = function(nums) {
    let map={}
    let flag=false;
    for(let i=0;i<nums.length;i++){
      if(!map.hasOwnProperty(nums[i])){
        map[nums[i]]=1
        flag=false
        
      }
      else{
        return true
        
      }
    }
    return flag
};