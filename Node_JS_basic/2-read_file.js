const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.toString().split('\n');

  const students = lines.filter((line) => line !== '');

  const numberOfStudents = students.length - 1;

  console.log(`Number of students: ${numberOfStudents}`);

  const fields = {};

  for (let i = 1; i < students.length; i += 1) {
    const student = students[i].split(',');

    const firstname = student[0];
    const field = student[3];

    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstname);
  }

  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      console.log(
        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
      );
    }
  }
}

module.exports = countStudents;
