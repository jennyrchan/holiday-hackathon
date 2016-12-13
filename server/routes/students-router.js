const express = require('express')
const db =  require('../../db');
const Student = require('../../db/models/student');

const router = express.Router();

// meant for displaying wishlist/toy, sends entire student for now
router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => res.send(student));
  //could do this instead of line 11
  //would be iffy if undefined I think
  // .then(student => {
  //   return student.getToy();
  // })
  // .then(toy => res.send(toy));
});

// assumes req.body just has a toyId
// like {toyId: 1}
// would also let you overwrite anything on student atm
router.post('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => student.update(req.body))
  .then(() => res.sendStatus(201));
});

// removes toyId from student
router.delete('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => student.update({toy_id: null}))
  .then(() => res.sendStatus(204));
});

module.exports = router;