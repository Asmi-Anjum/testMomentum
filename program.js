// 1. Create a function that calculates the area of a rectangle.
// function areaOfRec(l,b){
//     area = l*b;
//     return area;
// }

// result = areaOfRec(4,6);
// console.log("the area of rectangle is",result)


// 2. Write a function that takes an array of numbers and returns the sum of all the numbers.
// let array=[5,6,7,3,2];
// function ArraySum(numbers){
//     let sum=0;
//     for(let i=0;i<numbers.length;i++){
//         sum += numbers[i];
//     }
//     return sum;
// }
// result=ArraySum(array);
// console.log("the sum of array is",result);


// 3. Build a simple calculator function that can perform addition, subtraction, multiplication, and division.
// function calculator(num1, num2, operator){
//     switch (operator) {
//       case '+': return num1 + num2;
//       case '-': return num1 - num2;
//       case '*': return num1 * num2;
//       case '/': return num2 === 0 ? "Error: Division by zero" : num1 / num2;
//       default: return "Invalid operator";
//     }
//   };

//   console.log(calculator(4,7,'+'));

function sumAll(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

  const array = [1,2,3,5,8];
  let result = sumAll(array)
  console.log(result)
