// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Base Cases/Minimal Values
  // Undefined
  if (obj === undefined) {
    return '';
  }
  // Null
  if (obj === null) {
    return 'null';
  }
  // Boolean, Number
  if ((typeof obj === 'boolean') || (typeof obj === 'number')) {
  	return ('' + obj);
  }
  // String
  if (typeof obj === 'string') {
  	return ('"' + obj + '"');
  }
  
  // Recursive Cases
  // Array
  // Checks if Array
  if (Array.isArray(obj) === true) {
    // Pull Arg2, which function passes within self to handle if
    //   currently within an array
    index = arguments[1];
    // Checks if currently within the array
    if (index === undefined) {
      // if in an unstarted Array: list open bracket, recurse
      //   index 0, recurse array with index 1
      return ('[' + stringifyJSON(obj[0]) + stringifyJSON(obj, 1));
    } else {
      // If in a started Array, find if it is at end or not
      if (index < (obj.length - 1)) {
        // If middle: recurse index value and recurse array with
        //   next index 
        return (', ' + stringifyJSON(obj[index]) + stringifyJSON(obj, (index + 1)));
      } else if (index >= (obj.length - 1)) {
        // If end or past end: recurse value and list end bracket
        return (', ' + stringifyJSON(obj[index]) + ']');
      }
    }
  }
    
  // Object
  // No need to check now, as the last result would be a base object
  // var result handles string as it is finalized
  var result;
  // For-In loop to make sure all keys are handled
  for (var key in obj) {
    // check if result has been started
    if (result === undefined) {
      // if not, update result with: open curly brace, recurse key, and recurse value at key
      result = ('{' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    } else {
      // if so, update result with: comma, recurse key, and recurse value at key
      result = (result + ', '+ stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
  }
  // return result with closing curly brace
  return (result + '}');
};