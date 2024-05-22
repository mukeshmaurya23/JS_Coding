

function reverseArray(arr){
  //return arr.reverse()
    let newArr=[]
    let index=0;
    for(let i=arr.length-1;i>=0;i--){
        newArr[index]=arr[i]
        index++
        //or 
        //newArr.push(arr[i])
    }
    return newArr
}
let arr=[5,4,3,2,1,99]
let result=reverseArray(arr)
console.log(result)
