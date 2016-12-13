import express from 'express';
import db from '../../db';
const School = db.model('school');

const router = express.Router();

//sends an array of schools, to be put in a drop down select component
router.get('/', (req, res, next) => {
  School.findAll()
  .then(schools => res.send(schools));
});

//send an array of [student, toy] arrays
router.get('/:schoolId', (req, res, next) => {
  School.findById(req.params.schoolId)
  .then(school => {
    return school.getStudents();
  })
  .then(students => {
    return students.map(student => {
      return (student.toyId)
        ? [student, student.getToy()]
        : null;
    }).filter(elem => (elem !== null));
  })
  .then(studentsAndToys => res.send(studentsAndToys));
});
