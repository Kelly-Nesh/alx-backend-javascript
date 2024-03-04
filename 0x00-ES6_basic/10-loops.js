export default function appendToEachArrayValue(array, appendString) {
  for (let itm of array) {
    let value = itm;
    array[array.indexOf(itm)] = appendString + value;
  }

  return array;
}