'use strict'
class Person {
	constructor(name, contacts, dateOfBirth){
		this.name = name;
		this.contacts = contacts;
		this.dateOfBirth = dateOfBirth;
	};
	getTeacherNames(){};
        getStudentNames(){};
        getTeacherSalaryList(){};
	addTeacher(name){};
        addStudent(name){};
	removeTeacher(name){};
        removeStudent(name){};

};
module.exports = Person;

 
