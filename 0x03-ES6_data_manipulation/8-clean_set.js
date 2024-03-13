export default function cleanSet(set, startString) {
  let string = '';
  const len = startString.length;
  for (const i of set) {
    if (startString && i.startsWith(startString)) {
      string += string ? '-' : '';
      string += i.slice(len);
    }
  }
  return string;
}
