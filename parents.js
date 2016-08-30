'use strict'
const Person = require('./person');

class Parents extends Person {
	constructor(position, contacts){
                super(contacts);
		this.position = position;
	};
	
        getStudentgroup(){};
        getTeacherName(){};
        getStudentTimesheet(){};
        getStudentBookList(){};
        
        
        

};
module.exports = Parents;


