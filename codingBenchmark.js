/* 

JavaScript Coding Benchmark
Time Limit: 90 minutes
Complete each task in order. Use console.log() to check your work unless otherwise instructed. 

*/

// 1. Variables and Data Types
// Declare a variable 'name' and assign your name to it
let name = 'Laura'

// 2. Strings
// Write a function that takes a string and returns it reversed
function palindrome(s){
    return s.slice(-1,0,-1);
}

console.log(palindrome("racecar"));

// 3. Arrays
// Create an array of 5 fruits and log the third one
const arr = ["apple","orange","banana","kiwi"]
console.log(arr[2])
// 4. Loops
// Write a for loop that logs numbers 1 to 10 (inclusive)
for(let num=1; num <= 10; num++){
    console.log(num)
}
    
// 5. Conditionals
// Write a function that takes a number and returns "even" or "odd"
function evenodd(num){
    return "even" ? num % 2 === 0 : "odd";
}
// 6. Objects
// Create an object representing a dog with keys 'name', 'age', and 'breed'
const dog = {
    'name': 'buck',
    'age': 2,
    'breed': 'french bulldog'
}
// 7. Functions
// Write a function that takes two numbers and returns their product
function product(num1, num2){
    return num1 * num2;
}
console.log(product(20,2));
// 8. Array Methods
// Use .map to create an array of squares from 1 to 5
console.log([1,2,3,4,5].map( num => {return num * num}));
// 9. Sets (using Set)
// Create two sets with overlapping numbers and log their intersection
let set1 = new Set()
set1.add(2,3,4,5)
let set2 = new Set()
set2.add(4,5,3,7,8,9)
console.log(set1.intersection(set2))
// 10. Classes
// Define a class called Book with title and author properties
class Book {
    "title" = "This is a book"
    "author" = "An Author"
}

const book = new Book()
console.log(book)
console.log(book.title)
// 11. Intermediate: Nested Loops
// Write code that logs a multiplication table (1 through 5)
for(let i=1; i <= 5; i++){
    row = "";
    for(let j=1; j <= 5; j++){
        row + toString(i * j);
        console.log(toString(i*j))
    };
    console.log(row + '\n')
};
// 12. Intermediate: String Processing
// Write a function that counts how many vowels are in this string "Change the Face of Tech"
function countVowels(words){
    const VOWELS = ['a','e','i','o','u']
    let count = 0
    for(let letter = 0; letter < letter.length; letter++){
        console.log('in loop');
        if(VOWELS.includes(words[letter])){
            console.log(words[letter])
            count++;
        }
    }
    console.log(count);
}
countVowels("Change the Face of Tech")
// 13. Intermediate: Slicing
// Given the string "Ada Developers Academy", slice and log only the word "Developers"

// 14. Challenge: Recursion
// Problem: Write a recursive function that takes a non-negative integer n and returns the sum of its digits.
// Example: sumDigits(1234) -> 10
// Constraints: Do not use loops. Input will always be a non-negative integer.

function sumDigits(n) {
    // Replace with your code
}

module.exports.sumDigits = sumDigits;

if (typeof describe === 'function') {
    const { sumDigits } = require('./benchmark');
    describe('sumDigits', () => {
        test('base cases', () => {
            expect(sumDigits(0)).toBe(0);
            expect(sumDigits(5)).toBe(5);
        });
        test('recursive cases', () => {
            expect(sumDigits(1234)).toBe(10);
            expect(sumDigits(9999)).toBe(36);
        });
    });
}

// 15. Challenge: Sorting
// Problem: Write a function that sorts an array of numbers in ascending order using in-place insertion sort.
// Example: insertionSort([5, 2, 9, 1]) -> modifies array to [1, 2, 5, 9]
// Constraints: Do not return a new array. Do not use built-in sort methods.

function insertionSort(arr) {
    // Replace with your code
}

module.exports.insertionSort = insertionSort;

if (typeof describe === 'function') {
    const { insertionSort } = require('./benchmark');
    describe('insertionSort', () => {
        test('basic cases', () => {
            expect(insertionSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
            expect(insertionSort([])).toEqual([]);
            expect(insertionSort([1])).toEqual([1]);
            expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
        });
    });
}
