"use strict";
var L06_Aufgabenliste_Dataserver;
(function (L06_Aufgabenliste_Dataserver) {
    /*
        Aufgabe: 05_Aufgabenliste_Client
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 22.04.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1
        */
    window.addEventListener("load", handleLoad);
    async function handleLoad() {
        console.log("async");
        let response = await fetch("data.json");
        let task = await response.text();
        let data = JSON.parse(task);
        L06_Aufgabenliste_Dataserver.generateContent(data);
        let button = document.getElementById("btn");
        button.addEventListener("click", newTask);
    }
    async function newTask(_event) {
        let Title = document.querySelector("#inputText");
        let Comment = document.querySelector("#comment");
        let Name = document.querySelector("#AddName");
        let Date = document.querySelector("#date");
        let Time = document.querySelector("#time");
        let newTaskInput = { title: Title.value, comment: Comment.value, name: Name.value, date: Date.value, time: Time.value, done: false };
        console.log(newTaskInput);
        alert("Data sent & new task generated!");
        //     data.unshift(newTaskInput);
        // };
        //     generateContent(data);
        Title.value = "";
        Comment.value = "";
        Name.value = "Lisa";
        Date.value = "2023-04-15";
        Time.value = "10:00";
        // location.reload();
    }
    ;
})(L06_Aufgabenliste_Dataserver || (L06_Aufgabenliste_Dataserver = {}));
//# sourceMappingURL=Aufgabenliste.js.map