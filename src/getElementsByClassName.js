// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // Set body to what to recurse through
  if (arguments[1] === undefined) {
    var node = document.body.childNodes;
  } else {
    var node = arguments[1];
  }

  // Base Case
  // Empty Body
  if (node === undefined) {
    return;
  }

  // Set result to current result
  if (arguments[2] === undefined){
    var result = [];
  } else {
    var result = arguments[2];
  }
  
  // Recurse Case
  // Loop through all the discovered nodes
  for (var nodeIndex = 0; (node.length !== undefined) && (nodeIndex < node.length); nodeIndex++) {
    // check if node has class
    if (node[nodeIndex].classList !== []) {
      for (var classIndex = 0; (node[nodeIndex].classList !== undefined) && (classIndex < node[nodeIndex].classList.length); classIndex++) {
        if (node[nodeIndex].classList[classIndex] === className) {
          // add it to result if it does
          result.push(node[i]);
        }
      }
    }
    // recurse a level down
    getElementsByClassName(className, node.childNodes, result);
  }

  return result;

};
