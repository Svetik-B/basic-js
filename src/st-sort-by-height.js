import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight( arr ) {
  let newArr = arr.slice();
  newArr = newArr.filter(function (elem) {
    return elem != -1
  }).sort(function (a, b) { return a - b });
  arr.forEach(function (el, i) {
    el == -1 ? newArr.splice(i, 0, -1) : "";
  })
  return newArr
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
