
'''

🐍 Python Coding Benchmark
Time Limit: 90 minutes
Complete each task in order. Use print() to check your work unless otherwise instructed.

'''

# 1. Variables and Data Types
# Declare a variable 'name' and assign your name to it

# 2. Strings
# Write a function that takes a string and returns it reversed

# 3. Lists
# Create a list of 5 fruits and print the third one

# 4. Loops
# Write a for loop that prints numbers 1 to 10 (inclusive)

# 5. Conditionals
# Write a function that takes a number and returns "even" or "odd"

# 6. Dictionaries
# Create a dictionary representing a dog with keys 'name', 'age', and 'breed'

# 7. Functions
# Write a function that takes two numbers and returns their product

# 8. List Comprehension
# Use list comprehension to create a list of squares from 1 to 10

# 9. Sets
# Create two sets with overlapping numbers and print their intersection

# 10. Classes
# Define a class called Book with title and author attributes

# 11. Intermediate: Nested Loops
# Write code that prints a multiplication table (1 through 5)

# 12. Intermediate: Working with Strings
# Write a function that counts how many vowels are in this string "Change the Face of Tech"

# 13. Intermediate: Slicing
# Given the string "Ada Developers Academy", slice and print only the word "Developers"

# 14. Challenge: Recursion
# Problem: Write a recursive function that takes a non-negative integer n and returns the sum of its digits.
# Example: sum_digits(1234) -> 10
# Constraints: Do not use loops. Input will always be a non-negative integer.

def sum_digits(n):
    pass  # Replace with your code

# Sample Tests (pytest will use these)
def test_sum_digits():
    assert sum_digits(0) == 0
    assert sum_digits(5) == 5
    assert sum_digits(1234) == 10
    assert sum_digits(9999) == 36

# 15. Challenge: Sorting
# Problem: Write a function that sorts a list of numbers in ascending order using in-place insertion sort.
# Example: insertion_sort([5, 2, 9, 1]) -> modifies list to [1, 2, 5, 9]
# Constraints: Do not return a new list. Do not use built-in sort methods.

def insertion_sort(arr):
    pass  # Replace with your code

# Sample Tests (pytest will use these)
def test_insertion_sort():
    assert insertion_sort([5, 3, 8, 4, 2]) == [2, 3, 4, 5, 8]
    assert insertion_sort([]) == []
    assert insertion_sort([1]) == [1]
    assert insertion_sort([3, 2, 1]) == [1, 2, 3]
