// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // Set body to what to recurse through
  if (arguments[1] === undefined) {
    var node = document.body;
  } else {
    var node = arguments[1];
  }

  // Set result to current result
  if (arguments[2] === undefined){
    var result = [];
  } else {
    var result = arguments[2];
  }

  // Check current node's classes
  for (var classIndex = 0; (node.classList !== undefined) && (classIndex < node.classList.length); classIndex++) {
    if (node.classList[classIndex] === className) {
      // add it to result if it does
      result.push(node);
    }
  }

  // Base Case
  // Empty Body
  if (node === undefined || node.childNodes === undefined) {
    return;
  }

  // Recurse Case
  // Loop through all the discovered nodes
  //if (node.length !== undefined) {
    for (var nodeIndex = 0; nodeIndex < node.childNodes.length; nodeIndex++) {
      // recurse a level down
      getElementsByClassName(className, node.childNodes[nodeIndex], result);
    }
  //}

  return result;

};
