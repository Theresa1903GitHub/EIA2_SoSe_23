"use strict";
var L05_Aufgabenliste_Client;
(function (L05_Aufgabenliste_Client) {
    async function generateContent(_data) {
        let Tasklist = [];
        for (let x in _data.data) {
            Tasklist.push(x);
        }
        for (let i of Tasklist) {
            // for (let TaskId in _data) {
            //     let item = _data[TaskId];
            let newTaskDiv = document.createElement("form");
            newTaskDiv.classList.add("newTask");
            let toDoList = document.getElementById("toDoList");
            toDoList.appendChild(newTaskDiv);
            let Subgroup = document.createElement("div");
            Subgroup.classList.add("subgroup");
            newTaskDiv.appendChild(Subgroup);
            let Title = document.createElement("input");
            Title.type = "text";
            Title.value = _data.data[i].title;
            Title.classList.add("taskText");
            Subgroup.appendChild(Title);
            let Space = document.createElement("div");
            Space.classList.add("space");
            Subgroup.appendChild(Space);
            let DateTime = document.createElement("div");
            DateTime.classList.add("dateUndone");
            DateTime.id = "DateTime";
            Subgroup.appendChild(DateTime);
            let Date = document.createElement("input");
            Date.type = "date";
            Date.classList.add("dates");
            Date.value = _data.data[i].date;
            DateTime.appendChild(Date);
            let Time = document.createElement("input");
            Time.type = "time";
            Time.classList.add("dates");
            Time.value = _data.data[i].time;
            DateTime.appendChild(Time);
            let Group1 = document.createElement("div");
            Group1.classList.add("group1");
            newTaskDiv.appendChild(Group1);
            let Comment = document.createElement("textarea");
            Comment.classList.add("comments");
            Comment.value = _data.data[i].comment;
            newTaskDiv.appendChild(Comment);
            let Name = document.createElement("input");
            Name.type = "text";
            Name.classList.add("mediumbold", "name");
            Name.value = "@" + _data.data[i].name;
            newTaskDiv.appendChild(Name);
            let Subgroup1 = document.createElement("div");
            Subgroup1.classList.add("subgroup1");
            newTaskDiv.appendChild(Subgroup1);
            let inProgress = document.createElement("input");
            inProgress.type = "radio";
            inProgress.id = _data.data[i].title + "Progress";
            inProgress.value = _data.data[i].name;
            inProgress.name = "radio" + i;
            let LabelProgress = document.createElement("label");
            LabelProgress.textContent = "in progress";
            LabelProgress.classList.add("medium");
            LabelProgress.classList.add("label");
            LabelProgress.htmlFor = _data.data[i].title + "Progress";
            Subgroup1.appendChild(inProgress);
            Subgroup1.appendChild(LabelProgress);
            let done = document.createElement("input");
            done.type = "radio";
            done.id = _data.data[i].title + "Done";
            done.value = _data.data[i].name;
            done.name = "radio" + i;
            let LabelDone = document.createElement("label");
            LabelDone.textContent = "done";
            LabelDone.classList.add("medium");
            LabelDone.classList.add("label");
            LabelDone.htmlFor = _data.title + "Done";
            Subgroup1.appendChild(done);
            Subgroup1.appendChild(LabelDone);
            let Trash = document.createElement("img");
            Trash.setAttribute("src", "./images/u8.svg");
            Trash.classList.add("trash");
            Trash.addEventListener("click", function () {
                let id = _data;
                console.log(id);
                deleteTask(newTaskDiv, Space);
            });
            newTaskDiv.addEventListener("change", function () {
                editTask();
            });
            async function editTask() {
                let changedTitle = Title.value;
                let changedComment = Comment.value;
                let changedName = Name.value;
                let changedDate = Date.value;
                let changedTime = Time.value;
                let changedDone = done.checked;
                let changedTaskInput = { title: changedTitle, comment: changedComment, name: changedName, date: changedDate, time: changedTime, done: changedDone };
                console.log(changedTaskInput);
                let query = JSON.stringify(changedTaskInput);
                let id = JSON.stringify(_data.data);
                let something = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=update&collection=Tasks&id=" + id + "data=" + query);
                console.log(query);
                console.log(something);
            }
            ;
            Subgroup1.appendChild(Trash);
            toDoList.appendChild(Space);
        }
        ;
    }
    L05_Aufgabenliste_Client.generateContent = generateContent;
    ;
    async function deleteTask(_data, _data2) {
        // let id = _data[x];
        // console.log(id);
        let toDoList = document.getElementById("toDoList");
        toDoList.removeChild(_data);
        toDoList.removeChild(_data2);
        let query = new URLSearchParams();
        query.set("command", "delete");
        query.set("collection", "Tasks");
        query.set("id", "");
        let response = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?" + query.toString());
        console.log(response);
    }
})(L05_Aufgabenliste_Client || (L05_Aufgabenliste_Client = {}));
//# sourceMappingURL=generateContent.js.map