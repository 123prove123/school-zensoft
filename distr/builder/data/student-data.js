define(["require", "exports"], function (require, exports) {
    "use strict";
    var students = {
        VasyaPupkin: {
            name: 'VasyaPupkin',
            contact: 123,
            isActive: true,
            dateOfBirth: '2005.11.21'
        },
        BobMarley: {
            name: 'Bob Marley',
            contact: 123,
            isActive: true,
            dateOfBirth: '1997.11.21'
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = students;
});
