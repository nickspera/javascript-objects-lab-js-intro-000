var recipes = {}

// function updateObjectWithKeyAndValue(object, key, value){
//   recipes.prop = 'new value';
//   return recipes;
// }
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value });
  return recipes;
}


// function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  // recipes.prop = 'new value';
//  return recipes;
// }

// deleteFromObjectByKey(object, key)
