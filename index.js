var recipes = {}

/*function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
*/
function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object)
  newObject[key] = value
  return newObject
}
  