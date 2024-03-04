 export default function iterateThroughObject(reportWithIterator) {
    const all = [];
    for (let i of reportWithIterator) {
        all.push(i);
    }
    return all.join(" | ");
 }