import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";
  if (!("addition" in options)) options.addition = '';

  if (!options.additionRepeatTimes) return (str + "" + options.addition + options.separator).repeat(options.repeatTimes - 1) + str + "" + options.addition;
  if (!options.repeatTimes) return str + "" + (options.addition + "" + options.additionSeparator).repeat(options.additionRepeatTimes - 1) +
    options.addition;
  return (str + "" + (options.addition + "" + options.additionSeparator).repeat(options.additionRepeatTimes - 1) +
    options.addition + "" + options.separator).repeat(options.repeatTimes - 1) + str + "" + (options.addition + "" + options.additionSeparator).repeat(options.additionRepeatTimes - 1) +
    options.addition;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
