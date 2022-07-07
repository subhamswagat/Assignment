function sortArray(array) {
    let oddNums = [];
    for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 !== 0) {
        oddNums.push(array[i]);
      }
    }
    oddNums = oddNums.sort((a,b)=> a-b);
    array.concat(oddNums);
    array = array.sort((a,b) => a-b);
    return array;
  }
  let array = [5,3,9,1,44,6];
  console.log(sortArray[array]);