const express = require('express')
const db =  require('../../db');
const Student = require('../../db/models/student');

const router = express.Router();

// meant for displaying wishlist/toy, sends [student, toy]
router.get('/:studentId', (req, res, next) => {
  let theStudent;
  Student.findById(req.params.studentId)
  .then(student => {
    theStudent = student;
    return student.getToy();
  })
  .then(toy => res.send([theStudent, toy]));
});

// assumes req.body just has a toyId
// like {toy_id: 1}
// would also let you overwrite anything on student atm
router.post('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => student.update(req.body))
  .then(() => res.sendStatus(201));
});

// removes toy_id from student
router.delete('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => student.update({toy_id: null}))
  .then(() => res.sendStatus(204));
});

module.exports = router;