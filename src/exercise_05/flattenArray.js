export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if(array === null || array === undefined ){
    throw new Error('Flatten undefined or null array');
  }else if(array.length === 0) {
    return [];
  }else if (array.length){
    const arr = [];
    array.forEach(element => {
      (element instanceof Array) ? arr.push(...element) : arr.push(element);
    });
    return arr;
  }
}
