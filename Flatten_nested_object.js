
const obj={
  name:"zeeshan",
  age:"23",
  mobile:"70063",
  address:{
    city:"srinagar",
    state:"jk",
  },
  designation:{
    department:"software department",
    sub:{
      inner:{
         superd:"frontend",
        inner2:{
          name:"reactjs deptt"
        },
        deartmentsroles:["one","two","three","four"]
        
      }
    }
    
  }
}
let result={}

function flattenobj(obj,parentKey=''){
 
  for(let key in obj){
  if(obj?.hasOwnProperty(key)){
      let newKey=parentKey?`${parentKey}.${key}`:key
   
    
    if(typeof obj[key] ==="object"&& obj[key] !== null){
      flattenobj(obj[key],newKey)
    }
    else{
      result[newKey]=obj[key]
    }
  }
  }
  
  return result
  
}

console.log(flattenobj(obj, null))


/*output
{
  name: 'zeeshan',
  age: '23',
  mobile: '70063',
  'address.city': 'srinagar',
  'address.state': 'jk',
  'designation.department': 'software department',
  'designation.sub.inner.superd': 'frontend',
  'designation.sub.inner.inner2.name': 'reactjs deptt',
  'designation.sub.inner.deartmentsroles.0': 'one',
  'designation.sub.inner.deartmentsroles.1': 'two',
  'designation.sub.inner.deartmentsroles.2': 'three',
  'designation.sub.inner.deartmentsroles.3': 'four'
}
*/