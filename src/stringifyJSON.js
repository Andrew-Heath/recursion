// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // discern type of value passed in
  // figure out keys
  // figure out values attached to keys
  // create some order to return the values as

  // Base Cases/Minimal Values
  // Boolean, Number
  if (typeof obj === 'boolean' || typeof obj === 'number') {
  	return ('' + obj);
  }
  // String
  if (typeof obj === 'string') {
  	return ('"' + obj + '"');
  }
  
  // Recursive Cases
  // Array
  // Checks if Array
    // Pull Arg2, which function passes within self to handle if
    //   currently within an array
    // Checks if currently within the array
    // if in an unstarted Array: list open bracket, recurse
    //   index 0, recurse array with index 1
    // If in a started Array, find if it is at end or not
      // If middle: recurse index value and recurse array with
      //   next index 
      // If end: recurse value and list end bracket


  // Object
};
