"use strict";
var L05_Aufgabenliste_Client;
(function (L05_Aufgabenliste_Client) {
    /*
        Aufgabe: 05_Aufgabenliste_Client
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 29.04.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1
        */
    window.addEventListener("load", handleLoad);
    async function handleLoad() {
        let button = document.getElementById("btn");
        button.addEventListener("click", newTask);
        let response = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=find&collection=Tasks");
        let task = await response.text();
        let data = JSON.parse(task);
        // for (let task in data){
        //    export let id = data[task]
        // }
        L05_Aufgabenliste_Client.generateContent(data);
    }
    async function newTask() {
        let Title = document.querySelector("#inputText");
        let Comment = document.querySelector("#comment");
        let Name = document.querySelector("#AddName");
        let Date = document.querySelector("#date");
        let Time = document.querySelector("#time");
        let newTaskInput = { title: Title.value, comment: Comment.value, name: Name.value, date: Date.value, time: Time.value, done: false };
        console.log(newTaskInput);
        // let query: URLSearchParams = new URLSearchParams(<any>formData);
        let query = JSON.stringify(newTaskInput);
        let something = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=insert&collection=Tasks&data=" + query);
        let task = await something.text();
        console.log(query);
        console.log(something);
        console.log(task);
        Title.value = "";
        Comment.value = "";
        Name.value = "Lisa";
        Date.value = "2023-04-15";
        Time.value = "10:00";
    }
    ;
    // async function loadItem(): Promise<void> {
    //     let formData: FormData = new FormData(document.forms[0]);
    //     let json: FormDataJSON = {};
    //     for (let k of formData.keys())
    //             if (!json[k]) {
    //          let values: FormDataEntryValue[] = formData.getAll(k);
    //          json[k] = values.length > 1 ? values : values[0];
    //      }
    //     let query: URLSearchParams = new URLSearchParams();
    //     query.set("command", "insert");
    //     query.set("collection", "Tasks");
    //     query.set("data", JSON.stringify(json));
    //     let response: Response = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?" + query.toString());
    //    console.log(response);
    //  }
})(L05_Aufgabenliste_Client || (L05_Aufgabenliste_Client = {}));
//# sourceMappingURL=Aufgabenliste.js.map