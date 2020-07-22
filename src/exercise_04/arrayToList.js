export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if(array === null || array === undefined){
    throw new Error('Creating list from undefined array');
  }
  else if(array.length === 0){
    throw new Error('Creating list from empty array');
  }
  else{
  // recursion
    function addList(item){
     var arr = [];
     for(let i = item ; i<array.length;i++){
       var node = {};
      //  if have next node do recursion
       if (array[i+1]){
        node.value = array[i];
        node.next = addList(i+1);
        arr.push(node);
        return node;
       }else{
         node.value = array[i];
         node.next = null;
         return node;
       }
     }
    }
    return addList(0);
  }
}
