const marks = [80, 80, 50];

//Average = 70

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
//90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  // Step 1: Create variable (sum) with a initial value of 0

  // let sum = 0;

  // Step 2: Iterate through the array with for of loop

  // for (let mark of marks) sum += mark;

  // Step 3: Calculate the average of the sum

  // let average = sum / marks.length;

  let average = calculateAverage(marks);

  // Step 4: condition to get grades

  if (average < 59) return 'F';
  if (average < 69) return 'D';
  if (average < 79) return 'C';
  if (average < 89) return 'B';
  return 'A';
}

//Single Responsibility Principle

function calculateAverage(array) {
  let sum = 0;

  // Step 2: Iterate through the array with for of loop

  for (let value of array) sum += value;

  // Step 3: Calculate the average of the sum

  return sum / array.length;
}
