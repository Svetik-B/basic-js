import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine( str) {
  if (str == '') return ''
  let arr = str.split('');
  let len = str.length;
  let str1 = arr[0];
  let res = '', kol = 0;
  arr.forEach(function (el) {
    if (str1 == el) {
      kol++
    } else {
      res += kol + str1;
      kol = 1;
      str1 = el;
    }

  })
  res += kol + str1;
  return res.replace(new RegExp('1', 'g'), '');
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
