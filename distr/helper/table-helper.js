define(["require", "exports"], function (require, exports) {
    "use strict";
    class TableHelper {
        static createTd(value) {
            let td = document.createElement('td');
            td.textContent = '' + value;
            return td;
        }
        static createDeleteBtn(el_id, store, sessionStore) {
            let button = document.createElement('a');
            button.textContent = 'Delete';
            button.setAttribute('class', 'btn btn-danger');
            button.addEventListener('click', function () {
                store.removeByIdAndSession(el_id, sessionStore);
                this.parentElement.parentElement.remove();
            });
            return button;
        }
        static createEditBtn(el_id, store, sessionStore, form_id) {
            let form = document.getElementById(form_id);
            let button = document.createElement('a');
            button.textContent = 'Edit';
            button.setAttribute('class', 'btn btn-warning');
            console.log(form);
            button.addEventListener('click', function () {
                form.style.display = 'block';
            });
            return button;
        }
        static createTr() {
            return document.createElement('tr');
        }
        static createTable(store, table, sessionStore, form) {
            store.forEach(el => {
                let tr = TableHelper.createTr();
                Object.getOwnPropertyNames(el).forEach(function (val) {
                    const value = el[val];
                    const td = TableHelper.createTd(value);
                    tr.appendChild(td);
                });
                let buttonTd = document.createElement('td');
                buttonTd.appendChild(TableHelper.createDeleteBtn(el.id, store, sessionStore));
                buttonTd.appendChild(TableHelper.createEditBtn(el.id, store, sessionStore, form));
                tr.appendChild(buttonTd);
                table.appendChild(tr);
            });
            return this;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TableHelper;
});
