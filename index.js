var recipes = {}

// function updateObjectWithKeyAndValue(object, key, value){
//   recipes.prop = 'new value';
//   return recipes;
// }
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value });
}



function deleteFromObjectByKey(object, key){
  object[key] = value
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes.prop = 'new value';
 return recipes;
}
