//Find Explaination
//Syntax: array.find(callback(element, index, array), thisArg)
const numbersF = [1, 2, 3, 4, 5];
const evenNumber = numbersF.find((num) => num % 2 === 0);
console.log(evenNumber); // Output: 2
//find is used to locate the first element meeting a condition in an array.

//ForEach Explaination
//Syntax: array.forEach(callback(currentValue, index, array), thisArg)
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// Output:
// red
// green
// blue
//forEach is for executing a function for each element in an array.

//Map Explaination
//Syntax: array.map(callback(currentValue, index, array), thisArg)
const numbersM = [1, 2, 3, 4, 5];
const squaredNumbers = numbersM.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
//map creates a new array by applying a function to each element in the original array.
