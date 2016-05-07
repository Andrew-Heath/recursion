// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // Set body to what to recurse through
  if (arguments[1] === undefined) {
    var body = document.body;
  } else {
    var body = arguments[1];
  }

  // Base Case
  // Empty Body
  if (body === []) {
    return;
  }

  // Recurse Case
  var i = arguments[2];
  

};
