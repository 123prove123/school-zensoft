'use strict'
const Person = require('./person');

class Subject extends Person {
	constructor(name, level, hoursPerMonth, books, quote){
               super(name);
		this.level = level;
                this.hoursPerMonth = hoursPerMonth;
                this.quote = quote;
	};
	
        getSubjectsNames(){};
        getHoursPerMounthOfSubject(){};
        getBookList(){};
        getQuoteforSubject(){};
        
        
        

};
module.exports = Subject;

