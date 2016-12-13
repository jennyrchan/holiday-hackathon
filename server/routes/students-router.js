import express from 'express';
import db from '../../db';
const Student = db.model('student');

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
  .then(() => res.sendStatus(200));
});

// removes toyId from student
router.delete('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => student.setToy({}))
  .then(() => res.sendStatus(200));
});