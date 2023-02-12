// Eg - 1
const numbers = [1, 2, 3, 4, 5, 6, 7];
const evens = numbers.filter(item => item % 2 == 0);
console.log(evens);
const odd = numbers.filter(item => item % 2 !== 0);
console.log(odd);

// Eg - 2
const students = [
    { name: 'Aryan', grade: 96 },
    { name: 'Parth', grade: 84 },
    { name: 'Ajay', grade: 100 },
    { name: 'Kali', grade: 65 },
    { name: 'Puja', grade: 90 }
];

const studentGrades = students.filter(student => student.grade >= 90);
console.log(studentGrades);