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
}
module.exports = Position;
