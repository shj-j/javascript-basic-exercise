export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  if (string){
    if(prediction){
      let num = 0;
      string.split("").reduce((pre,next) => { prediction(next) ? num++ : 0},[]);
      return num;
    }else{
      return string.length;
    }
  }else{
    return 0;
  }
}
