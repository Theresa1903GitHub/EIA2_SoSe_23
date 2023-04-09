namespace Aufgabenliste{
    /*
        Aufgabe: 02_EventInspector
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 07.04.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1
        */
window.addEventListener("load", handleLoad);
        
function handleLoad ():void {
    let pen : NodeListOf<Element> = document.querySelectorAll(".pen");
    let trash : NodeListOf<Element> = document.querySelectorAll(".trash");
    let button : HTMLButtonElement = <HTMLButtonElement> document.getElementById("btn");
    let done : NodeListOf<Element> = document.querySelectorAll(".done");

let editTask = () => {
    console.log("edit this task");
}

let deleteTask = () => {
    console.log("delete this task");
}

let TaskDone = () => {
    console.log("this task is done");
}
    
pen.forEach((item) => {
    item.addEventListener("click", editTask)})

trash.forEach((item) => {
    item.addEventListener("click", deleteTask)});

done.forEach((item) => {
    item.addEventListener("click", TaskDone)});

button.addEventListener("click", newTask);
}    


// function deleteTask (_event:MouseEvent): void {
//     console.log("delete this task");
// }

function newTask (_event:MouseEvent): void {
    console.log("create a new task");
}




}