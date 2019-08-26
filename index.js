var recipes = {
  prop: '1',
  prop2: '2'
}

// function updateObjectWithKeyAndValue(object, key, value){
//   recipes.prop = 'new value';
//   return recipes;
// }
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: '2' });
  return recipes;
}


// function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  // recipes.prop = 'new value';
//  return recipes;
// }

// deleteFromObjectByKey(object, key)
