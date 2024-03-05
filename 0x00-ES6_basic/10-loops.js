export default function appendToEachArrayValue(array, appendString) {
  for (const itm of array) {
    const value = itm;
    array[array.indexOf(itm)] = appendString + value;
  }

  return array;
}
