import PositionService from '../services/position-service';

class Position {
  constructor(quote, name) {
    this.setQuote(quote);
    this.setName(name);
  }
  save() {
    PositionService.add(this);
    return this;
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
export default Position;
