const express = require('express')
const db =  require('../../db');
const School = require('../../db/models/school');
const Student = require('../../db/models/student');

const router = express.Router();

//sends an array of schools, to be put in a drop down select component
router.get('/', (req, res, next) => {
  School.findAll({})
  .then(schools => res.send(schools));
});

//send an array of [student, toy] arrays
router.get('/:schoolId', (req, res, next) => {
  let studentsArr;
  Student.findAll({
    where: {
        school_id: req.params.schoolId,
        toy_id: {
          $ne: null
        }
      }
    })
  .then(students => {
    studentsArr = students;
    console.log(students);
    const toyPromises = students.map(student => {
      return student.getToy();
    });
    return Promise.all(toyPromises);
  })
  .then(toys => res.send(toys.map((toy, i) => [studentsArr[i], toy])));
});

module.exports = router;
