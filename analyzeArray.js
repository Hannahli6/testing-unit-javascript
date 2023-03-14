function analyzeArray(array) {
  if(!Array.isArray(array)){
    return 'not valid input';
  }
  for(let i = 0; i< array.length; i++){
    if(typeof array[i] !== "number"){
      return 'not valid input';
    }
  }
  let average = Math.round(array.reduce((a, b) => a + b, 0)/array.length);
  let min = Math.min(...array);
  let max = Math.max(...array);
  let length= array.length;

  return {
    'average': average,
    'min': min,
    'max': max,
    'length': length
  };
  

}

// cases
// 1234 => not valid input
// ['abcd'] => not valid input
// [1,2,3,'a'] => not valid input
// ['1','2'] => not valid input

// [1,2,3,4,5] => object == { average: 3, min: 1, max: 5, length: 5}
// [1,2.9,3,4,5] => object == { average: 3, min: 1, max: 5, length: 5}
// average should round down


export default analyzeArray;
