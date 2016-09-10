const Teacher = require('../models/teacher.js');
const Store = require('../models/store.js');
let TeacherArray = [];
var counter = 0;
class TeacherService{
  constructor() {
  };
  static createTeacher(teacher) {
    teacher.id = counter;
    counter++;
    TeacherArray.push(new Teacher(teacher));
    return this;
  };
  static removeTeacherById(id){
    TeacherArray = TeacherArray.filter(function(el){
      return el.user.id !== id;
    });
  };
  static removeTeacher(field, value) {
    TeacherArray = TeacherArray.filter(function(el){
      if(el[field] === value) {
        return true;
      } else {
        if(el.user[field] !== value) {
          return true;
        }
      }
      return false;
    });
  }
  static findTeacherById(id) {
    return TeacherArray.filter(function(el){
      return el.user.id === id;
    });
  }
  static findTeacher(field, value) {
    return TeacherArray.filter(function(el){
      if(el[field] === value) {
        return true;
      } else {
        if(el.user[field] !== value) {
          return true;
        }
      }
      return false;
    });
  };
  static findAllTeacher(){
    return TeacherArray;
  };
  static save() {

  }
}

TeacherService.createTeacher({name: 'Mike'}, [1,2], [1,2], 'Teacher');
TeacherService.createTeacher({name: 'John'}, [1,2], [1,2], 'Teacher');






console.log(TeacherArray)

module.exports = TeacherArray;
