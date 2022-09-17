function nextGreaterElement(arr, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
      let greater = arr[i];
      let flag = 0;
      for (let j = i; j < n; j++) {
        if (greater < arr[j]) {
          greater = arr[j];
          flag = 1;
          break;
        }
      }
      if (flag == 0) {
        greater = -1;
      }
      result.push(greater);
    }
    return result;
  }
  
    var array = [1, 3, 2, 4];
    var arraySize = array.length;
    console.log(nextGreaterElement(array, arraySize));
  
    var myArray = [6, 8, 0, 1, 3];
    var myArraySize = myArray.length;
    console.log(nextGreaterElement(myArray, myArraySize));