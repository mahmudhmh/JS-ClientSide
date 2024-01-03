//EX1-Object functions

/*
1- Object.keys(obj): Returns an array of a given object's own enumerable property names.

2- Object.values(obj): Returns an array of a given object's own enumerable property values.

3- Object.entries(obj): Returns an array of a given object's own enumerable property key-value pairs.

4- Object.assign(target, source): Copies the values of all enumerable properties from one or more source objects to a target object.

5- Object.freeze(obj): Freezes an object, preventing new properties from being added and existing properties from being removed or changed.

6- Object.seal(obj): Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.

7- Object.create(proto, [propertiesObject]): Creates a new object with the specified prototype object and properties.

8-Object.hasOwnProperty(prop): Returns a boolean indicating whether the object has the specified property as its own property.

9- Object.getPrototypeOf(obj): Returns the prototype (internal [[Prototype]] property) of the specified object.

10- Object.is(obj1, obj2): Determines whether two values are the same value.
*/

//1
const car1 = { make: "Toyota", model: "Camry", year: 2022 };
const keys = Object.keys(car1);
console.log(keys);
// Output: ['make', 'model', 'year']

//2
const car2 = { make: "Toyota", model: "Camry", year: 2022 };
const values = Object.values(car2);
console.log(values);
// Output: ['Toyota', 'Camry', 2022]

//3
const car3 = { make: "Toyota", model: "Camry", year: 2022 };
const entries = Object.entries(car3);
console.log(entries);
// Output: [['make', 'Toyota'], ['model', 'Camry'], ['year', 2022]]

//4
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);
console.log(result);
// Output: { a: 1, b: 3, c: 4 }

//5
const person5 = { name: "John", age: 30 };
Object.freeze(person5);
person5.age = 31;
console.log(person5);
// Output: { name: 'John', age: 30 }

//6
const laptop = { brand: "Dell", model: "XPS" };
Object.seal(laptop);
laptop.color = "silver";
console.log(laptop);
// Output: { brand: 'Dell', model: 'XPS' }

//7
const vehicle = { type: "car", wheels: 4 };
const car7 = Object.create(vehicle, {
  make: { value: "Toyota" },
  model: { value: "Camry" },
});
console.log(car7.make);
// Output: 'Toyota'

//8
const person8 = { name: "Alice", age: 25 };
console.log(person8.hasOwnProperty("name")); // Output: true
console.log(person8.hasOwnProperty("gender")); // Output: false

//9
const car9 = { make: "Toyota", model: "Camry" };
const prototype = Object.getPrototypeOf(car9);
console.log(prototype === Object.prototype); // Output: true

//10
const x = 5;
const y = 5;
const z = "5";
console.log(Object.is(x, y)); // Output: true
console.log(Object.is(x, z)); // Output: false

//EX2-Array functions

/*
1- array.push(element): Adds one or more elements to the end of an array and returns the new length.

2- array.pop(): Removes the last element from an array and returns that element.

3- array.shift(): Removes the first element from an array and returns that element.

4- array.unshift(element): Adds one or more elements to the beginning of an array and returns the new length.

5- array.slice(start, end): Returns a shallow copy of a portion of an array into a new array object.

6- array.splice(start, deleteCount, item1, item2, ...): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

7- array.concat(array2, array3, ...): Returns a new array combining the elements of the original array and other arrays.

8- array.indexOf(element): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

9- array.join(separator): Joins all elements of an array into a string, with an optional separator.

10- array.reverse(): Reverses the elements of an array in place.
 */

//1
const fruits1 = ["apple", "orange", "banana"];
const newLength1 = fruits1.push("grape");
console.log(fruits1); // Output: ['apple', 'orange', 'banana', 'grape']
console.log(newLength1); // Output: 4

//2
const fruits2 = ["apple", "orange", "banana"];
const removedFruit2 = fruits2.pop();
console.log(fruits2); // Output: ['apple', 'orange']
console.log(removedFruit2); // Output: 'banana'

//3
const fruits3 = ["apple", "orange", "banana"];
const removedFruit3 = fruits3.shift();
console.log(fruits3); // Output: ['orange', 'banana']
console.log(removedFruit3); // Output: 'apple'

//4
const fruits4 = ["apple", "orange", "banana"];
const newLength4 = fruits4.unshift("grape");
console.log(fruits4); // Output: ['grape', 'apple', 'orange', 'banana']
console.log(newLength4); // Output: 4

//5
const numbers5 = [1, 2, 3, 4, 5];
const slicedNumbers = numbers5.slice(1, 4);
console.log(slicedNumbers); // Output: [2, 3, 4]

//6
const numbers6 = [1, 2, 3, 4, 5];
numbers6.splice(2, 1, 6, 7);
console.log(numbers6); // Output: [1, 2, 6, 7, 4, 5]

//7
const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
const newArr = arr1.concat(arr2);
console.log(newArr); // Output: [1, 2, 3, 'a', 'b', 'c']

//8
const fruits8 = ["apple", "orange", "banana"];
const index = fruits8.indexOf("orange");
console.log(index); // Output: 1

//9
const fruits9 = ["apple", "orange", "banana"];
const joinedString = fruits9.join(", ");
console.log(joinedString); // Output: 'apple, orange, banana'

//10
const numbers10 = [1, 2, 3, 4, 5];
numbers10.reverse();
console.log(numbers10); // Output: [5, 4, 3, 2, 1]

//EX3-Function Nested

function outerFunction() {
  let outerVariable = "I am outer";

  function innerFunction() {
    let innerVariable = "I am inner";
    console.log(outerVariable + " | " + innerVariable);
  }

  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();

/*
- The outerFunction is a function that declares a variable outerVariable and a function innerFunction. The innerFunction is a closure because it's defined inside outerFunction and has access to outerFunction's scope. This means innerFunction can access outerVariable, even after outerFunction has finished execution.

- The outerFunction returns innerFunction when it's called. This returned function is stored in the closureFunction variable. When closureFunction is called, it executes innerFunction, which logs the outerVariable and innerVariable to the console.

- The key takeaway here is that innerFunction still has access to outerVariable even after outerFunction has finished execution. This is a fundamental aspect of closures in JavaScript: they remember the environment in which they were created.
*/
