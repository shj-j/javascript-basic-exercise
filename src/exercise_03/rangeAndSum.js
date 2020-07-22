export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var arr = []
  for(let i = 0; i<Math.abs(end-start); i++){
    if(start==end){
      return [];
    }
    (end<start) ? arr.push(start - i) : arr.push(start + i)
  }
  return arr;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var arr = [...numbers]
  return arr[0] ? arr.reduce((x,y)=>x+y): 0;
  
}
