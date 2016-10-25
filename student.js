'use strict'
const Person = require('./person');

class Student extends Person {
	constructor(studentgroup, parents){
		this.studentgroup = studentgroup;
                this.parents = parents;
	};
	
        getStudentgroup(){};
        getParentsName(){};
        getBooks(){};
        getTeacherName(){};
        
        
        

};
module.exports = Student;


