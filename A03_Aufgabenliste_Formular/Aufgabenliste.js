"use strict";
var Aufgabenliste;
(function (Aufgabenliste) {
    /*
        Aufgabe: 02_EventInspector
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 07.04.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1
        */
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let pen = document.querySelectorAll(".pen");
        let trash = document.querySelectorAll(".trash");
        let button = document.getElementById("btn");
        let done = document.querySelectorAll(".done");
        let editTask = () => {
            console.log("edit this task");
        };
        let deleteTask = () => {
            console.log("delete this task");
        };
        let TaskDone = () => {
            console.log("this task is done");
        };
        pen.forEach((item) => {
            item.addEventListener("click", editTask);
        });
        trash.forEach((item) => {
            item.addEventListener("click", deleteTask);
        });
        done.forEach((item) => {
            item.addEventListener("click", TaskDone);
        });
        button.addEventListener("click", newTask);
    }
    // function deleteTask (_event:MouseEvent): void {
    //     console.log("delete this task");
    // }
    function newTask(_event) {
        console.log("create a new task");
    }
})(Aufgabenliste || (Aufgabenliste = {}));
//# sourceMappingURL=Aufgabenliste.js.map