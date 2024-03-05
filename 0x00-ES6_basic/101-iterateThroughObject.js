export default function iterateThroughObject(reportWithIterator) {
  const all = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const i of reportWithIterator) {
    all.push(i);
  }
  return all.join(' | ');
}
