//1.
function largerThanNum (arr, num) {
  let result = [];
  for(let i = 0; i <= arr.length - 1; i++){
    if(arr[i] > num) result.push(arr[i])
  }
  result.length === 0 ? console.log("Such values do not exist") : console.log(result);
 }

console.log(largerThanNum([10, 25, 16, -5, 30, 15, 24], 16))

/*//2. the code doesn't work
function eachDigitIsEven(num1, num2) {
  let result = [];
  for (let i = num1; i <= num2; i++){
    let isEven = false;
    while (i){
      let digit = i % 10;
      if (digit % 2 === 0) isEven = true;
      i = Math.floor(i / 10);
    }
    if (isEven) result.push(i);
  }
  return result;
}

console.log(eachDigitIsEven(19, 42))*/

//3.
function findIndexOfSortingOrderEnd(arr) {
  for(let i = 0; i <= arr.length - 1; i++) {
    if(arr[i + 1] < arr[i]) return i + 1;
  }
  return -1;
}
 console.log(findIndexOfSortingOrderEnd([-9, -4, -4, 3, 12, 4, 5]))

 //4.
 function findTheLargestProduct(arr) {
   let result = 0;
   for (let i = 0; i <= arr.length - 2; i++) {
     if (arr[i] * arr[i + 1] > result) result = arr[i] * arr[i + 1];
   }
   return result;
 }

 console.log(findTheLargestProduct([1, 2, 4, 14, 3, -5, 1, 40]))

 //5.
 function findTheCountOfMissingElements (arr) {
   let min = 0;
   let max = 0;
   for (let i = 0; i <= arr.length - 1; i++) {
     if (arr[i] < min) min = arr[i];
     if (arr[i] > max) max = arr[i];
   }
  return (max - min - arr.length + 1);
 }

 console.log(findTheCountOfMissingElements([2, -1, 12, 15]))

 //6.
 function findSumOfEachRow(arr) {
   let result = [];
      for (let i = 0; i <= arr.length - 1; i++){
       let sum = 0;
        for (let j = 0; j <= arr[i].length - 1; j++){
        sum += arr[i][j];
     }
     result.push(sum);
    }
   return result;
 }

 console.log(findSumOfEachRow([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]))

 //7.
 function getNewArray(arr) {
   let result = [];
   for (let i = 0; i <= arr.length - 1; i++) {
     if (arr[i] % 2 !== 0) result.push(arr[i])
   }
   for (let i = 0; i <= result.length - 1; i++){
     result[i] *= result.length; 
   }
   return result;
 }
  
console.log(getNewArray([5, 4, 78, 0, -3, 7]))