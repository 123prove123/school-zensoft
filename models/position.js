class Position {
  constructor(quote, name) {
    this.setQuote(quote);
    this.setName(name);
  }
  setQuote(quote){
    this.quote = quote;
    return this;
  }
  setName(name){
    this.name = name;
    return this;
  }
  getQuote() {
    return this.quoute;
  }
  getName() {
    return this.name;
  }
}
module.exports = Position;
