'use strict'
const Person = require('./person');

class Teacher extends Person {
	constructor(subjects = [], salary, studentgroups = [],position){
		this.subjects = subjects;
		this.salary = salary;
		this.studentgroups = studentgroups;
                this.position = position;
	};
	getSubjects(){};
	getSalaryList(){};
        getStudentgroups(){};
        getPosition(){};
        getStudentNames(){};
        getStudentBookList(){};
   
};
module.exports = Teacher;

