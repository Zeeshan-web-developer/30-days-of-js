// Answer explanition
// Step 1:
// n = 1011
// n & 1 = 1011 & 0001 = 0001  // Least significant bit is 1, so the result is 1.

// Step 2:
// After shifting n to the right (n >>>= 1), n becomes 101.

// Step 3:
// n = 101
// n & 1 = 101 & 0001 = 0001  // Least significant bit is 1 again, so the result is 1.

// Step 4:
// After shifting n to the right, n becomes 10.

// Step 5:
// n = 10
// n & 1 = 10 & 0001 = 0000  // Least significant bit is 0, so the result is 0.

// Step 6:
// After shifting n to the right, n becomes 1.

// Step 7:
// n = 1
// n & 1 = 1 & 0001 = 0001  // Least significant bit is 1, so the result is 1.

/**
 * @param {number} n
 * @return {number}
 * Given a positive integer n, write a function that returns the number of 
set bits
 in its binary representation (also known as the Hamming weight).

 

Example 1:

Input: n = 11

Output: 3

Explanation:

The input binary string 1011 has a total of three set bits.

Example 2:

Input: n = 128

Output: 1

Explanation:

The input binary string 10000000 has a total of one set bit.
 */
var hammingWeight = function (n) {
  let numOfBits = 0;
  while (n !== 0) {
    numOfBits += n & 1; //checking bit by bit {if last bit is 1}
    n >>>= 1; //right shift by 1 remove the last bit adter checking
  }
  return numOfBits;
};
