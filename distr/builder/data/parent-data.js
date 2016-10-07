define(["require", "exports"], function (require, exports) {
    "use strict";
    var parents = {
        parentOne: {
            name: 'ParentOne',
            contact: '0321',
            isActive: true,
            dateOfBirth: '1983.09.21',
            whoWork: 'Businesman'
        },
        parentTwo: {
            name: 'ParentTwo',
            contact: '0321',
            isActive: true,
            dateOfBirth: '1983.09.21',
            whoWork: 'Driver'
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = parents;
});
