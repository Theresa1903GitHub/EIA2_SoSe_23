"use strict";
var A03;
(function (A03) {
    window.addEventListener("load", function () {
        // console.log(today.getDate()+ " " + getMonth() );
        let count = document.getElementById("count");
        let toDoList = document.getElementById("toDoList");
        // let comment : HTMLInputElement = <HTMLInputElement> document.getElementById("comment");
        function tasksAnzahl() {
            count.innerHTML = tasksNumber + " in total";
        }
        function addTask() {
            const newDiv = document.createElement("div");
            newDiv.className = "newTask";
            // const Kreis: HTMLImageElement = document.createElement ("img");
            // Kreis.className = "Checkbox";
            // Kreis.setAttribute("src", "./images/u5.svg");
            // Kreis.setAttribute("width", "30");
            // Kreis.setAttribute("height", "30");
            // const Haken: HTMLImageElement = document.createElement ("img");
            // Haken.className = "Haken";
            // Haken.setAttribute("src", "./images/u7.svg");
            // Haken.setAttribute("width", "20");
            // const radio: HTMLInputElement = document.createElement("input");
            // radio.setAttribute("name","progress");
            // radio.setAttribute("type", "radio");
            const Text = document.createElement("label");
            Text.innerHTML = enter.value;
            Text.setAttribute("width", "200");
            Text.setAttribute("height", "50");
            Text.setAttribute("font-size", "larger");
            Text.className = "taskText";
            const Comment = document.createElement("comment");
            Comment.innerHTML = comment.value;
            Comment.setAttribute("width", "200");
            Comment.setAttribute("height", "50");
            Comment.className = "commentText";
            const Trash = document.createElement("img");
            Trash.setAttribute("src", "./images/u8.svg");
            Trash.setAttribute("width", "20");
            Trash.className = "Papierkorb";
            toDoList.appendChild(newDiv);
            // newDiv.appendChild(Kreis);
            //newDiv.appendChild(Haken);
            newDiv.appendChild(Text);
            //newDiv.appendChild(Trash);
            newDiv.appendChild(Comment);
            // newDiv.appendChild(radio)
            // Kreis.addEventListener("click", function(){
            //     newDiv.appendChild(Haken);
            // })
            // Haken.addEventListener("click", function(){
            //     newDiv.removeChild(Haken);
            // })
            newDiv.addEventListener("mouseenter", function () {
                newDiv.appendChild(Trash);
            });
            newDiv.addEventListener("mouseleave", function () {
                newDiv.removeChild(Trash);
            });
            function deleteTask(_div) {
                newDiv.remove();
                tasksNumber--;
                tasksAnzahl();
            }
            Trash.addEventListener("click", function (_event) {
                deleteTask(newDiv);
            });
            tasksNumber++;
            tasksAnzahl();
        }
        let enter = (document.getElementById("inputText"));
        let comment = (document.getElementById("comment"));
        let tasksNumber = 0;
        enter.addEventListener("keypress", function (event) {
            if (event.key == "Enter") {
                addTask();
                enter.value = "";
                comment.value = "";
            }
        });
        comment.addEventListener("keypress", function (event) {
            if (event.key == "Enter") {
                addTask();
                comment.value = "";
                enter.value = "";
            }
        });
    });
})(A03 || (A03 = {}));
//# sourceMappingURL=script.js.map