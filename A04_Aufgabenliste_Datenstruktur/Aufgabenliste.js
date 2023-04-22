"use strict";
var L04_Aufgabenliste_Datenstruktur;
(function (L04_Aufgabenliste_Datenstruktur) {
    /*
        Aufgabe: 04_Aufgabenliste
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 15.04.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1
        */
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        L04_Aufgabenliste_Datenstruktur.generateContent(L04_Aufgabenliste_Datenstruktur.data);
        let button = document.getElementById("btn");
        button.addEventListener("click", newTask);
        //     let dropdown : HTMLSelectElement = <HTMLSelectElement> document.getElementById("progress");
        // let DateTime : HTMLDivElement = <HTMLDivElement> document.getElementById("DateTime");
        // dropdown.addEventListener('change', function colorChange () {  
        //     if (dropdown.value == 'undone'){
        //         console.log("undone");
        //         console.log(dropdown.value);
        //         DateTime.classList.add("dateOver");
        //     }      
        //     else if (dropdown.value == 'inprogress'){
        //         console.log("inProgress");
        //         DateTime.classList.add("date");
        //     }
        //     else {
        //         console.log("done");
        //         DateTime.classList.add("dateDone");
        //     };
        //     return
        //     });
    }
    function newTask(_event) {
        let Title = document.querySelector("#inputText");
        let Comment = document.querySelector("#comment");
        let Name = document.querySelector("#AddName");
        let Date = document.querySelector("#date");
        let Time = document.querySelector("#time");
        let newTaskInput = { title: Title.value, comment: Comment.value, name: Name.value, date: Date.value, time: Time.value, done: false };
        L04_Aufgabenliste_Datenstruktur.data.Input.unshift(newTaskInput);
        console.log(L04_Aufgabenliste_Datenstruktur.data);
        L04_Aufgabenliste_Datenstruktur.generateContent(L04_Aufgabenliste_Datenstruktur.data);
        Title.value = "";
        Comment.value = "";
        Name.value = "Lisa";
        Date.value = "2023-04-15";
        Time.value = "10:00";
    }
    // let dropdown : HTMLSelectElement = <HTMLSelectElement> document.getElementById("progress");
    //     let DateTime : HTMLDivElement = <HTMLDivElement> document.getElementById("DateTime");
    //     dropdown.addEventListener('change', function colorChange () {  
    //         if (dropdown.value == 'undone'){
    //             console.log("undone");
    //             DateTime.classList.add("dateOver");
    //         }      
    //         else if (dropdown.value == 'inprogress'){
    //             console.log("inProgress");
    //             DateTime.classList.add("date");
    //         }
    //         else {
    //             console.log("done");
    //             DateTime.classList.add("dateDone");
    //         };
    //         return
    //         });
})(L04_Aufgabenliste_Datenstruktur || (L04_Aufgabenliste_Datenstruktur = {}));
//# sourceMappingURL=Aufgabenliste.js.map