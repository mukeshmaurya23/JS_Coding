//arr[] = {2,5,1,3,0};
function findSmallest(arr){
 // return arr.sort((a,b)=>a-b)[arr.length-2]
  let secondSmallest=Infinity;
  let smallest=Infinity
  let largest=-Infinity
  let secondLargest=-Infinity
  for(let i=0;i<arr.length;i++){
     // smallest=Math.min(smallest,arr[i])
     //  largest=Math.max(largest,arr[i])
      if(arr[i]>largest){
          secondLargest=largest;
          largest=arr[i]
      }else if(arr[i]>secondLargest && arr[i]!=largest){
          secondLargest=arr[i]
      }
      if(arr[i]<smallest){
          secondSmallest=smallest
          smallest=arr[i]
      }else if(arr[i]<secondSmallest && arr[i]!=smallest){
          secondSmallest=arr[i]
      }
  }
  
 // for(let i=0;i<arr.length;i++){
 //     if(arr[i]>secondLargest && arr[i]!=largest){
 //         secondLargest=arr[i]
 //     }
 //     if(arr[i]<secondSmallest && arr[i]!=smallest){
 //         secondSmallest=arr[i]
 //     }
 // }
 
  return {
      secondLargest:secondLargest,
      secondSmallest:secondSmallest
  }
}
let arr=[5,4,3,2,1]
let result=findSmallest(arr)  
console.log(result)
