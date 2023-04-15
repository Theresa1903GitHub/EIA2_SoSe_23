"use strict";
var L04_Aufgabenliste_Datenstruktur;
(function (L04_Aufgabenliste_Datenstruktur) {
    /*
        Aufgabe: 04_Aufgabenliste
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 07.04.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1
        */
    window.addEventListener("load", handleLoad);
    let Title = document.querySelector("#inputText");
    let Comment = document.querySelector("#comment");
    let Name = document.querySelector("#AddName");
    let Date = document.querySelector("#date");
    let Time = document.querySelector("#time");
    // let DateTime : HTMLDivElement = <HTMLDivElement> document.getElementById(_data.Input[x].name + "Done");   
    function handleLoad() {
        L04_Aufgabenliste_Datenstruktur.generateContent(L04_Aufgabenliste_Datenstruktur.data);
        let button = document.getElementById("btn");
        // let done: HTMLLabelElement = <HTMLLabelElement> document.createElement("Done");
        // let inProgress: HTMLLabelElement = <HTMLLabelElement> document.createElement("Progress");
        button.addEventListener("click", newTask);
        // done.addEventListener("click", TaskDone);
        // done.addEventListener("click", TaskDone);     
        // inProgress.addEventListener("click", TaskinProgress);
    }
    // function TaskDone (){
    //     console.log("Done");
    // }
    // function TaskinProgress(){
    //     console.log("Progress");
    // }
    function newTask(_event) {
        let newTaskInput = {
            Input: [
                { title: Title.value, comment: Comment.value, name: Name.value, date: Date.value, time: Time.value, done: false },
            ]
        };
        L04_Aufgabenliste_Datenstruktur.generateContent(newTaskInput);
        Title.value = "";
        Comment.value = "";
        Name.value = "Lisa";
        Date.value = "2023-04-15";
        Time.value = "10:00";
    }
})(L04_Aufgabenliste_Datenstruktur || (L04_Aufgabenliste_Datenstruktur = {}));
//# sourceMappingURL=Aufgabenliste.js.map