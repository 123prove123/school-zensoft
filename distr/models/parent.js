define(["require", "exports", './commons/person', '../services/parent-service'], function (require, exports, person_1, parent_service_1) {
    "use strict";
    class Parent extends person_1.default {
        constructor(user, whoWork) {
            super(user);
            this.setWhoWork(whoWork);
        }
        save() {
            parent_service_1.default.add(this);
            return this;
        }
        setWhoWork(position) {
            this.whoWork = position;
            return this;
        }
        getWhoWork() {
            return whoWork;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Parent;
});
