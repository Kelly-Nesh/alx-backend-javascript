export default function groceriesList() {
  const map = new Map([]);
  [['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5]].forEach((e) => map.set(e[0], e[1]));
  return map;
}
