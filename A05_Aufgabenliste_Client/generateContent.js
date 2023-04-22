"use strict";
var L05_Aufgabenliste_Client;
(function (L05_Aufgabenliste_Client) {
    async function generateContent(_data) {
        let Tasklist = document.getElementById("toDoList");
        for (let x = 0; x < _data.Input.length; x++) {
            let newTaskDiv = document.createElement("div");
            newTaskDiv.classList.add("newTask");
            Tasklist.appendChild(newTaskDiv);
            let Subgroup = document.createElement("div");
            Subgroup.classList.add("subgroup");
            newTaskDiv.appendChild(Subgroup);
            let Title = document.createElement("input");
            Title.type = "text";
            Title.value = _data.Input[x].title;
            Title.classList.add("taskText");
            Subgroup.appendChild(Title);
            // Title.addEventListener("change", editTask());
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
            Date.value = _data.Input[x].date;
            DateTime.appendChild(Date);
            // Date.addEventListener("change", function editTask() {
            //     console.log("edit");   
            // });
            let Time = document.createElement("input");
            Time.type = "time";
            Time.classList.add("dates");
            Time.value = _data.Input[x].time;
            DateTime.appendChild(Time);
            // Date.addEventListener("change", function editTask() {
            //     console.log("edit");   
            // });    
            let Group1 = document.createElement("div");
            Group1.classList.add("group1");
            newTaskDiv.appendChild(Group1);
            let Comment = document.createElement("textarea");
            Comment.classList.add("comments");
            Comment.value = _data.Input[x].comment;
            newTaskDiv.appendChild(Comment);
            // Comment.addEventListener("change", function editTask() {
            //     console.log("edit");   
            // });
            let Name = document.createElement("input");
            Name.type = "text";
            Name.classList.add("mediumbold", "name");
            Name.value = "@" + _data.Input[x].name;
            newTaskDiv.appendChild(Name);
            // Name.addEventListener("change", function editTask() {
            //     console.log("edit");   
            // });
            let Subgroup1 = document.createElement("div");
            Subgroup1.classList.add("subgroup1");
            newTaskDiv.appendChild(Subgroup1);
            let inProgress = document.createElement("input");
            inProgress.type = "radio";
            inProgress.id = _data.Input[x].title + "Progress";
            inProgress.value = _data.Input[x].name;
            inProgress.name = "radio" + x;
            // inProgress.addEventListener("change", function editTask() {
            //     console.log("edit");   
            // });
            let LabelProgress = document.createElement("label");
            LabelProgress.textContent = "in progress";
            LabelProgress.classList.add("medium");
            LabelProgress.classList.add("label");
            LabelProgress.htmlFor = _data.Input[x].title + "Progress";
            Subgroup1.appendChild(inProgress);
            Subgroup1.appendChild(LabelProgress);
            let done = document.createElement("input");
            done.type = "radio";
            done.id = _data.Input[x].title + "Done";
            done.value = _data.Input[x].name;
            done.name = "radio" + x;
            // done.addEventListener("change", function editTask() {
            //     console.log("edit");   
            // });
            // let LabelDone : HTMLLabelElement = document.createElement("label");
            // LabelDone.textContent = "done";
            // LabelDone.classList.add("medium");
            // LabelDone.classList.add("label");
            // LabelDone.htmlFor = _data.Input[x].title + "Done";
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
            Trash.addEventListener("click", function deleteTask() {
                alert("This task will be removed...");
                Tasklist.removeChild(newTaskDiv);
                Tasklist.removeChild(Space);
            });
            newTaskDiv.addEventListener("change", function editTask() {
                console.log("edit");
                alert("changed data will be sent!");
                let changedTitle = Title.value;
                let changedComment = Comment.value;
                let changedName = Name.value;
                let changedDate = Date.value;
                let changedTime = Time.value;
                console.log("{ " + "title: " + changedTitle + ", comment: " + changedComment + ", name: " + changedName + ", date: " + changedDate + ", time: " + changedTime + ", done: " + false + " }");
            });
            Subgroup1.appendChild(Trash);
            Tasklist.appendChild(Space);
            // let dropdown = document.createElement('select');
            // dropdown.id = 'progress';
            // newTaskDiv.appendChild(dropdown);
            // let undone : HTMLOptionElement = document.createElement('option');
            // undone.textContent = 'undone';
            // undone.value = 'undone';
            // dropdown.appendChild(undone);
            // let InProgress : HTMLOptionElement = document.createElement('option');
            // InProgress.textContent = 'in progress';
            // InProgress.value = 'inprogress';
            // dropdown.appendChild(InProgress);
            // let Done: HTMLOptionElement = document.createElement('option');
            // Done.textContent = 'done';
            // Done.value = 'done';
            // dropdown.appendChild(Done);
        }
        ;
    }
    L05_Aufgabenliste_Client.generateContent = generateContent;
})(L05_Aufgabenliste_Client || (L05_Aufgabenliste_Client = {}));
//# sourceMappingURL=generateContent.js.map