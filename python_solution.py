# Python Coding Benchmark Solution Key

# 1. Variables and Data Types
# Declare a variable 'name' and assign your name to it
name = "Ada Lovelace"

# 2. Strings
# Write a function that takes a string and returns it reversed
def reverse_string(s):
    return s[::-1]

# 3. Lists
# Create a list of 5 fruits and print the third one
fruits = ["apple", "banana", "cherry", "date", "elderberry"]
print(fruits[2])  # cherry

# 4. Loops
# Write a for loop that prints numbers 1 to 10 (inclusive)
for i in range(1, 11):
    print(i)

# 5. Conditionals
# Write a function that takes a number and returns "even" or "odd"
def even_or_odd(n):
    return "even" if n % 2 == 0 else "odd"

# 6. Dictionaries
# Create a dictionary representing a dog with keys 'name', 'age', and 'breed'
dog = {"name": "Fido", "age": 3, "breed": "Beagle"}

# 7. Functions
# Write a function that takes two numbers and returns their product
def multiply(a, b):
    return a * b

# 8. List Comprehension
# Use list comprehension to create a list of squares from 1 to 10
squares = [x**2 for x in range(1, 11)]

# 9. Sets
# Create two sets with overlapping numbers and print their intersection
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a & b)

# 10. Classes
# Define a class called Book with title and author attributes
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

# 11. Intermediate: Nested Loops
# Write code that prints a multiplication table (1 through 5)
for i in range(1, 6):
    for j in range(1, 6):
        print(i * j, end=" ")
    print()

# 12. Intermediate: Working with Strings
# Write a function that counts how many vowels are in a string
def count_vowels(s):
    return sum(1 for char in s.lower() if char in "aeiou")

# 13. Intermediate: Slicing
# Given the string "Ada Developers Academy", slice and print only the word "Developers"
s = "Ada Developers Academy"
print(s[4:14])  # Developers

# 14. Challenge: Recursion
# Problem: Write a recursive function that takes a non-negative integer n and returns the sum of its digits.
# Example: sum_digits(1234) -> 10
# Constraints: Do not use loops. Input will always be a non-negative integer.
def sum_digits(n):
    if n == 0:
        return 0
    return n % 10 + sum_digits(n // 10)

# 15. Challenge: Sorting
# Problem: Write a function that sorts a list of numbers in ascending order using in-place insertion sort.
# Example: insertion_sort([5, 2, 9, 1]) -> modifies list to [1, 2, 5, 9]
# Constraints: Do not return a new list. Do not use built-in sort methods.
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr
