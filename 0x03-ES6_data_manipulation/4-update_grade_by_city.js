export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.map((e) => {
    const grade = newGrades.find((n) => n.studentId === e.id);
    e.grade = grade ? grade.grade : 'N/A';
    return e;
  }).filter((e) => e.location === city);
}
