/*check if given number is prime or not*/

let isPrime = (num) => {
   let objRet = { isPrime: null, numOp: 0};

   if(num <= 1){
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

/*reverse a string*/

// one way to reverse a string is to split the original string into array, reverse array and then join together from the array into a string

/*
let reverseStr = (str) => str.split(' ').reverse().join(' ');
*/

/*another way is to create an empty string, get the substring between the current beginning location of the string parsing in to the next string index with the empty space. Add the substring to the new string to be returned until the whole original string is parsed. */ 

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

reverseStr(' ');
reverseStr('that is so cool');

reverseStr('1 2 3 4 5 6 7 8 9');

/*find pairs that adds up to 0*/
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
findPair([0, 0, 0]);
findPair([-2,1,2,3,-3]);
findPair([-3,-1, -32103123, -234223, 234223, -4]);
findPair([1, 2, 3, 4, 5, 6, 7, 8]);
