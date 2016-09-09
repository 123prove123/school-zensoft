const Teacher = require('../models/teacher.js');


class TeacherService{
  constructor() {
    this.counter = 0;
    this.store = [];
  };
  createTeacher(teacher) {
    teacher.id = this.counter;
    this.counter++;
    this.store.push(new Teacher(teacher));
    return this;
  };
  removeTeacherById(id){
    this.store = this.store.filter(function(el){
      return el.user.id !== id;
    });
  };
  removeTeacher(field, value) {
    this.store = this.store.filter(function(el){
      if(el[field] === value) {
        return true;
      } else {
        if(el.user[field] === value) {
          return true;
        }
      }
      return false;
    });
  }
  findTeacherById(id) {
    return this.store.filter(function(el){
      return el.user.id === id;
    });
  }
  findTeacher(field, value) {
    return this.store.filter(function(el){
      if(el[field] === value) {
        return true;
      } else {
        if(el.user[field] === value) {
          return true;
        }
      }
      return false;
    });
  };
  findAllTeacher(){
    return this.store;
  };

}

const TeacherArray = new TeacherService();

TeacherArray.createTeacher({name: 'Mike'}, [1,2], [1,2], 'Teacher');


TeacherArray.createTeacher({name: 'Two'}, [1,2], [1,2], 'Teacher');

// console.log(TeacherArray.removeTeacher('name', 'Mike'));
// console.log(TeacherArray.findAllTeacher());


module.exports = TeacherArray;
