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
        // let done: HTMLInputElement = document.createElement("input");
        button.addEventListener("click", newTask);
        // done.addEventListener("click", TaskDone);
    }
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
    L04_Aufgabenliste_Datenstruktur.done.addEventListener("click", function TaskDone() {
        L04_Aufgabenliste_Datenstruktur.DateTime.classList.add("dateDone");
        L04_Aufgabenliste_Datenstruktur.DateTime.classList.remove("dateUndone");
        L04_Aufgabenliste_Datenstruktur.DateTime.classList.remove("dateOver");
    });
    L04_Aufgabenliste_Datenstruktur.inProgress.addEventListener("click", function TaskinProgress() {
        L04_Aufgabenliste_Datenstruktur.DateTime.classList.add("dateUndone");
        L04_Aufgabenliste_Datenstruktur.DateTime.classList.remove("dateDone");
        L04_Aufgabenliste_Datenstruktur.DateTime.classList.remove("date");
    });
    // function TaskDone(){
    //     DateTime.classList.add("dateDone");
    // };
    // // let today = new Date ();
    // // console.log(today);
    // // // let todayString = today.toISOString;
    // // // console.log(todayString);
    // // let exactDate : Date = <Date> date.valueAsDate;
    // // if (exactDate.getTime() <= today.getTime()) {
    // // 	console.log("true");
    // //     console.log(today);
    // //     console.log(exactDate);    
    // // }
    // // else{
    // //     console.log("false");
    // //     console.log(today);
    // //     console.log(exactDate);
    // // }
})(L04_Aufgabenliste_Datenstruktur || (L04_Aufgabenliste_Datenstruktur = {}));
//# sourceMappingURL=Aufgabenliste.js.map