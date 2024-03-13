export default function getStudentIdsSum(list) {
  return list.reduce((i, e) => (i + e.id), 0);
}
