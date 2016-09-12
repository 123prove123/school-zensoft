var counter = 0;

class Store extends Map {
  getNextId() {
    return counter++;
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
  findBy(field, value) {
    var callBack;
    this.forEach(function(el, id){
      if(el[field] === value) {
        return el;
      } else {
        if(el.user[field] === value) {
          callBack = el;
        }
      }
    });
    return callBack;
  }
  findById(id) {
    this.get(id);
  }
  checkId(id) {
    this.has(id);
  }
  getAll() {
    return this;
  }
}


module.exports = Store;
