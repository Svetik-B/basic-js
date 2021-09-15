import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = "" + n;
  let len = str.length;
  let arr = [], str1;
  for (let i = 0; i < len; i++) {
    arr.push(Number(str.substr(0, i) + str.substr(i + 1)));

  }
  return Math.max.apply(null, arr);
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
