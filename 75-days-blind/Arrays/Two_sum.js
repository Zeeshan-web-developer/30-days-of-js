
const twoSum=(arr,target)=>{
  let map={}
  
  for(let i=0;i<arr.length;i++){
    let currentValue=arr[i];      //store the current value
    
    let requiredValue=target-currentValue;  //store the required value
    
    if(map.hasOwnProperty(requiredValue)){   //check if the required value is present in the map
      return [map[requiredValue],i]    //return the index of the required value and the current index
      
    }
    else{
      map[currentValue]=i     //store the current value and its index in the map 
    }
  }
  
}

twoSum([3,4,6,2,7,9],5)  //[1,3]