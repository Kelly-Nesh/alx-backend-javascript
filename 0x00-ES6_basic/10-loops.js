export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line no-restricted-syntax
  for (const itm of array) {
    const value = itm;
    // eslint-disable-next-line no-param-reassign
    array[array.indexOf(itm)] = appendString + value;
  }

  return array;
}
