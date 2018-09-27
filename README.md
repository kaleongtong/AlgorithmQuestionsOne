# Ways to Solve Some Sample Algorithm Questions

In this repository I will demonstrate ways to check if a number is a prime number, reversing the word order of a string, and find pair of numbers that add up to 0.

## Checking if a number is prime or not

### To begin the problem we can eliminate any number that is 2 or below because none of those numbers will be prime numbers. 

Afterward we can loop through numbers from 3 until the square root of the number given to us. 

If the given number can be divided by any number going from 3 until the square root of the number, then the given number is not a prime number. Otherwise, it is a prime number.

/*check if given number is prime or not */
let isPrime = (num) => {
   let objRet = { isPrime: null, numOp: 0};

   if(num <= 2){
      objRet.isPrime = false;
      objRet.numOp = 1;
      return objRet;
   }
   for(let i = 3; i < Math.sqrt(num) + 1; i++){
      objRet.numOp = objRet.numOp + 1;
      if(num % i == 0){
         objRet.isPrime = false;
         return objRet;
      }
   }
   objRet.isPrime = true;
   return objRet;
}

/* Example of calling isPrime function */
isPrime(20); // false
isPrime(-3); // false
isPrime(0); // false
isPrime(3323); // true

## Reverse the word ordering of a string

## This method takes in a string and reverse the ordering of all the words in it. For example,
"I love a dog" would be turned to "dog a love I".

There are two ways of doing this problem.  

One way to reverse a string is to split the original string into array, reverse array and then join together from the array into a string.

/*
let reverseStr = (str) => str.split(' ').reverse().join(' ');
*/

Another way is to loop through a string until there are no more empty spaces to locate. Get the substring between current beginning and the closest index of the empty space first.
Afterward append this substring to the end of the new reverse string.

let reverseStr = (str) => {
   let newStr = '';
   while(str.indexOf(' ') != -1){
      let spaceIdx = str.indexOf(' ');
      newStr = str.substr(0, spaceIdx) + ' ' + newStr;
      str = str.substr(spaceIdx + 1, str.length - 1);
   }
   newStr = str + ' ' + newStr.substr(0, newStr.length - 1);
   return newStr;
}

## Find all unique pairs of numbers that add up to 0

### There are two ways to do this. One way is via the brute force method. 

With the brute force method, you can loop through the rest of the array for each number and find the other number that adds up to 0.
This can be implemented easily but the performance would be o(n^2).

Another method is to have a hashmap to keep track of the numbers as you loop along. For every number you increment its count and check against its negative number.

If the count of the negative number in the hashmap is positive then we push the current number and the negative version of the number to the array. If it is just a 0 then we simply push the 0 to the result.

let findPair = (arr) => {
   let objRet = { arrPair: [], numOp: 0};
   let numCount = {};
   
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== 0){
         if(numCount[arr[i]] === undefined){
             numCount[arr[i]] = 1;
         }

         if(numCount[arr[i] * -1] === undefined){
             numCount[arr[i] * -1] = 0;
          }
          numCount[arr[i]]++;
         if(numCount[arr[i]] && numCount[arr[i] * -1]){
            objRet.arrPair.push([parseInt([arr[i]]), parseInt(arr[i] * -1)]);
            numCount[arr[i]]--;
            numCount[arr[i] * -1]--;
         }

      }else if(arr[i] == 0){
         objRet.arrPair.push([0]);
      }
      objRet.numOp++;
   }
   return objRet;
}
