# Ways to Solve Some Sample Algorithm Questions

In this repository I will demonstrate ways to check if a number is a prime number, reversing the word order of a string, and find pair of numbers that add up to 0.

## Checking if a number is prime or not

### To begin the problem we can eliminate any number that is 2 or below because none of those numbers will be prime numbers. 

Afterward we can loop through numbers from 3 until the square root of the number given to us. 

If the given number can be divided by any number from 3 until the square root of the number, then the given number is not prime. 

Otherwise, it is a prime number.


## Reverse the word ordering of a string

### This method takes in a string and reverse the ordering of all the words in it. For example,
"I love a dog" would be turned to "dog a love I".

There are two ways of doing this problem.  

One way to reverse a string is to split the original string into array, reverse array and then join together from the array into a string.

Second way of reversing a string is via the following steps:

```shell
- Loop through a string until there are no more empty spaces to locate. 
- Get the substring between current beginning and the closest index of the empty space first.
- Afterward append this substring to the end of the new reverse string.
```

## Find all unique pairs of numbers that add up to 0

### There are two ways to do this. One way is via the brute force method. 

With the brute force method, you can loop through the rest of the array for each number and find the other number that adds up to 0.
This can be implemented easily but the performance would be o(n^2).

Another way of doing it is via the following steps:

```shell
- contain a hashmap to keep track of the numbers as you loop along. 
- For every number you increment its count and check against its negative number.
- If the count of the negative number in the hashmap is positive then we push the current number and its negative number to the array. 
- If it is just a 0 then we simply push the 0 to the result.
```
