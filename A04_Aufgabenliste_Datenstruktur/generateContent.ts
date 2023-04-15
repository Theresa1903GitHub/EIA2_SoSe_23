namespace L04_Aufgabenliste_Datenstruktur {

export function generateContent(_data: toDoList): void {
    let Tasklist: HTMLElement = <HTMLElement> document.getElementById("toDoList");
    for(let x: number = 0; x < _data.Input.length; x++) {    
        let newTaskDiv: HTMLDivElement= document.createElement("div");
        newTaskDiv.classList.add("newTask");
        Tasklist.appendChild(newTaskDiv);

        let Subgroup : HTMLDivElement = document.createElement("div");
        Subgroup.classList.add("subgroup");
        newTaskDiv.appendChild(Subgroup);

        let Title = document.createElement("input");
        Title.type = "text";
        Title.setAttribute("required", "required");
        Title.value = _data.Input[x].title;
        Title.classList.add("taskText");
        Subgroup.appendChild(Title);  

        let Space: HTMLDivElement= document.createElement("div");
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

        let Time = document.createElement("input"); 
        Time.type = "time";
        Time.classList.add("dates");
        Time.value = _data.Input[x].time;
        DateTime.appendChild(Time);     
        
        let Group1 : HTMLDivElement = document.createElement("div");
        Group1.classList.add("group1");
        newTaskDiv.appendChild(Group1);
            
        let Comment : HTMLTextAreaElement = document.createElement("textarea");
        Comment.classList.add("comments");
        Comment.value = _data.Input[x].comment;
        newTaskDiv.appendChild(Comment);

        let Name = document.createElement("input");
        Name.type = "text";
        Name.classList.add("mediumbold", "name")
        Name.value = "@" + _data.Input[x].name;
        newTaskDiv.appendChild(Name);

        let Subgroup1 : HTMLDivElement = document.createElement("div");
        Subgroup1.classList.add("subgroup1")
        newTaskDiv.appendChild(Subgroup1);
       
        let inProgress: HTMLInputElement = document.createElement("input");
        inProgress.type = "radio";
        inProgress.id = _data.Input[x].title  + "Progress";
        inProgress.value = _data.Input[x].name;
        // inProgress.addEventListener("click", function TaskinProgress(){
        //     DateTime.classList.add("dateUndone");
        // });
        inProgress.name = "radio" + x;
        
        let LabelProgress : HTMLLabelElement = document.createElement("label");
        LabelProgress.textContent = "in progress";
        LabelProgress.classList.add("medium");
        LabelProgress.classList.add("label");
        LabelProgress.htmlFor = _data.Input[x].title + "Progress";

        Subgroup1.appendChild(inProgress);
        Subgroup1.appendChild(LabelProgress);

        let done: HTMLInputElement = document.createElement("input");
        done.type = "radio";
        done.id = _data.Input[x].title + "Done";
        done.value = _data.Input[x].name;
        done.name = "radio" + x;
        
        let LabelDone : HTMLLabelElement = document.createElement("label");
        LabelDone.textContent = "done";
        LabelDone.classList.add("medium");
        LabelDone.classList.add("label");
        LabelDone.htmlFor = _data.Input[x].title + "Done";

        Subgroup1.appendChild(done);
        Subgroup1.appendChild(LabelDone);

        let Trash = document.createElement("img");
        Trash.setAttribute("src", "./images/u8.svg");
        Trash.classList.add("trash");

        Trash.addEventListener("click", function deleteTask(){
                Tasklist.removeChild(newTaskDiv);
                Tasklist.removeChild(Space);
            });
        
        Subgroup1.appendChild(Trash);
        
        Tasklist.appendChild(Space);
}
}

}




