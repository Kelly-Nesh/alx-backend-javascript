export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.map((e) => {
    e.grade = newGrades.find((n) => n.studentId === e.id)?.grade || 'N/A';
    return e;
  }).filter((e) => e.location === city);
}
