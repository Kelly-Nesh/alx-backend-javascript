export default function createIteratorObject(report) {
  const employees = []
  Object.values(report.allEmployees).forEach(e => {
    e.forEach(em => employees.push(em))
  });
  const iterator = employees[Symbol.iterator]()
  return iterator
}