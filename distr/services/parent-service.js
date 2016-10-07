define(["require", "exports", './store', '../models/parent'], function (require, exports, store_1, parent_1) {
    "use strict";
    const ParentStore = new store_1.default();
    class ParentService {
        static create(name, contact, isActive, dateOfBirth, whoWork) {
            return new parent_1.default({ name, contact, isActive, dateOfBirth }, whoWork);
        }
        static add(model) {
            ParentStore.add(model);
        }
        static getStore() {
            return ParentStore;
        }
        static getAllParentsName() {
            let ParentName = [];
            ParentStore.forEach(function (el) {
                ParentName.push(el.user.name);
            });
            return ParentName;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ParentService;
});
