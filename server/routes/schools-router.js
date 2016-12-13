const express = require('express')
const db =  require('../../db');
const School = require('../../db/models/school');

const router = express.Router();

//sends an array of schools, to be put in a drop down select component
router.get('/', (req, res, next) => {
  School.findAll({})
  .then(schools => res.send(schools));
});

//send an array of [student, toy] arrays
router.get('/:schoolId', (req, res, next) => {
  School.findById(req.params.schoolId)
  .then(school => {
    return school.getStudents();
  })
  .then(students => {
    console.log(students);
    return students.map(student => {
      return (student.toyId !== null)
        ? [student, student.getToy()]
        : null;
    }).filter(elem => (elem !== null));
  })
  .then(studentsAndToys => res.send(studentsAndToys));
});

module.exports = router;
