export default function cleanSet(set, startString) {
  let string = '';
  if (startString && typeof startString === 'string') {
    const len = startString.length;
    for (const i of set) {
      if (i.startsWith(startString)) {
        string += string ? '-' : '';
        string += i.slice(len);
      }
    }
  }
  return string;
}
