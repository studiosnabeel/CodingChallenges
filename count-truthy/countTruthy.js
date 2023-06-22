const array = [1, 2, 3, 4, 'nabeel', null, 0, ''];

console.log(countTruthy(array));

function countTruthy(array) {
  //step1 create a count variable with a value of 0
  let count = 0;
  //step2 iterate through this array
  //step3 set the if condition for the count
  for (let value of array) if (value) count++;

  return count;
}

// falsy undefined, null, "", false, 0, NaN
