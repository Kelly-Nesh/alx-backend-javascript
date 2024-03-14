export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
  let key = weakMap.get(endpoint);
  if (typeof key === 'number') {
    key += 1;
  } else key = 1;
  weakMap.set(endpoint, key);
}
