export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
  promises.forEach(ele=>{
    if(!(ele instanceof Promise)){
      throw new Error('Not all elements are promises.');
    }
  });

  var isResolve = true;

  return new Promise((resolve,reject)=>{
    const check = ()=>{ isResolve ? resolve(): reject() }
    promises.forEach((cur,index) => {
      cur.then(()=>{
          if(index === promises.length-1) check();
        },
        ()=>{
          isResolve = false
          if(index === promises.length-1) check()
        }
      );
    })
  })
}
