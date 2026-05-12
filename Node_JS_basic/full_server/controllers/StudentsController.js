import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const database = process.argv[2];

    readDatabase(database)
      .then((fields) => {
        const output = ['This is the list of our students'];

        const sortedFields = Object.keys(fields).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        sortedFields.forEach((field) => {
          const names = fields[field];
          output.push(
            `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
          );
        });

        response.status(200).type('text/plain').send(output.join('\n'));
      })
      .catch(() => {
        response.status(500).type('text/plain').send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const database = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).type('text/plain').send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(database)
      .then((fields) => {
        const names = fields[major] || [];
        response.status(200).type('text/plain').send(`List: ${names.join(', ')}`);
      })
      .catch(() => {
        response.status(500).type('text/plain').send('Cannot load the database');
      });
  }
}

export default StudentsController;
