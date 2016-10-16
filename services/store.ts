
class Store extends Map {
  constructor() {
    super(...arguments);
    this.counter = 1;
  }
  getNextId() {
    return this.counter++;
  }
  fillId(value) {
    if(!value.id) {
      value.id = this.getNextId();
    }
    return value;
  }
  add(value) {
    value = this.fillId(value);
    this.set(value.id, value);
  }
  removeBy(field, value) {
    const that = this;
    this.forEach(function(el, id){
      if(el[field] === value) {
        that.delete(id);
      } else {
        if(el.user[field] === value) {
          that.delete(id);
        }
      }
    });
    return this;
  }
  removeById(id) {
    this.delete(id);  
  }
  removeByIdAndSession(id, sessionStore) {
    const session = JSON.parse(sessionStorage.getItem('' + sessionStore));
    let storeArray = session.filter((el) => {
      return el.id !== id;
    });
    sessionStorage.setItem(sessionStore, JSON.stringify(storeArray));
    this.delete(id);
  }
  findBy(field, value) {
    var callback;
    this.forEach(function(el, id){
      if(el[field] === value) {
        callback = el;
      }
    });
    return callback;
  }
  findById(id) {
    return this.get(id);
  }
  checkId(id) {
    return this.has(id);

  }
  getAll() {
    return this;
  }
}


export default Store;
