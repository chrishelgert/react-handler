/**
 * checks if the key is empty
 * or it doesn´t exists in the given props
 * or the entry in props is emtpy.
 */
function isEmpty(key, props) {
  if (key) {
    return !props[key] || (props[key] && !props[key].length);
  }

  return false;
}

export default isEmpty;
