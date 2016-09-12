class Person {
  constructor(user) {
    this.user = user;
  }
  // create user
  setName(name) {
    this.user.name = name;
    return this;
  }
  getName() {
    return this.user.name;
  }
  setContact(number) {
    this.user.contact = number;
    return this;
  }
  getContact(){
    return this.user.contact;
  }
  setActive(isActive) {
    this.user.isActive = isActive;
    return this;
  }
  getIsActive() {
    return this.user.isActive;
  }
  setDate(dateOfBirth) {
    this.user.dateOfBirth = dateOfBirth;
    return this;
  }
  getDate(){
    return this.user.dateOfBirth;
  }

}

module.exports = Person;
