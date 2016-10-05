define(["require", "exports"], function (require, exports) {
    "use strict";
    var teachers = {
        johnSmith: {
            name: 'John Smith',
            contact: '0321',
            isActive: true,
            dateOfBirth: '1983.09.21'
        },
        pavelVolya: {
            name: 'Pavel Volya',
            contact: '0321',
            isActive: true,
            dateOfBirth: '1983.09.21'
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = teachers;
});
