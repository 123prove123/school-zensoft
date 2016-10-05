define(["require", "exports", '../services/position-service'], function (require, exports, position_service_1) {
    "use strict";
    class Position {
        constructor(quote, name) {
            this.setQuote(quote);
            this.setName(name);
        }
        save() {
            position_service_1.default.add(this);
            return this;
        }
        setQuote(quote) {
            this.quote = quote;
            return this;
        }
        setName(name) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Position;
});
