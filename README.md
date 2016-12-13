# toy-deploy

* Backend Database
  - Table Schemas:
    - students
        ID        Name        SchoolID         UserID       ToyID      Fulfilled (T/F)       Fulfilled By (DonatorID)

    - schools
        ID        Name        Address       UserID

    - donators
        ID        Name       UserID

    - toys
      ID          Name       URL        ImagePath(Optional)

    - all users
      ID        Login       Password       Type of User

  - Associations:
    - Student.belongsTo(School);    -->     puts SchoolID on Student table
    - School.hasMany(Student);      -->     allows for School.getStudents, School.setStudents, etc.
    - Student.belongsTo(Donator);   -->     puts DonatorID on Student table
    - Student.belongsTo(User);      -->     puts UserID on Student table
    - Student.belongsTo(Toy);       -->     puts ToyID on Student table
    - School.belongsTo(User);       -->     puts UserID on School table
    - Donator.belongsTo(User);      -->     puts UserID on Donator table

  - OPTIONAL: wish lists (join table between students and toys) ********
    ID          ToyID       UserID        Fulfilled
                  [{toy: Bear, fulfilled: true}, {toy: yoyo, fulfilled: false}]      1       [true, false]
                  Bear      2
                  Bear      3


* Routes

*** main/app.js

app.get('/') => Home Page (Login Here)
app.use('/students') => use module router Students
app.use('/schools') => use module router Schools

*** routes/students.js

router.get('/:studentId') => student's current wishlist
router.post('/:studentId') => add new toy
router.delete('/:studentId') => remove toy from wishlist
router.put('/:studentId') => mark toy as purchased with the donator's ID

*** routes/schools.js

router.get('/') => full list of all schools
router.get('/:schoolId') => each school's wishlist


  - if you log in as student:
    - current wish list
    - add a gift form

  - if you log in as donator:
    - full list of all schools --> can filter down by your neighborhood or community
    - each school's wishlist of all toys --> can filter down by toys already fulfilled

  - *** Optional: if you log in school admin:
    - all students
    - each student's individual wishlist
    - full list of toys


* Separation of User Types
  - student
  - school admin
  - donator/charity organization


* Front End
  - gift forms
  - user sign up
  - displaying the gift list
  - interactive gift list
