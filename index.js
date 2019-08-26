var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
}

function deleteFromObjectByKey(object, key){
  object[key] = value;
  }
