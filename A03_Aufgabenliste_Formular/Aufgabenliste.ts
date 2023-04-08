namespace Aufgabenliste{
    /*
        Aufgabe: 02_EventInspector
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 07.04.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, L02 Jirka
        */
window.addEventListener("load", handleLoad);
        
function handleLoad ():void {
    let pen = document.querySelectorAll(".pen");
    let trash : NodeListOf<Element> = document.querySelectorAll(".trash");
    let button : HTMLButtonElement = <HTMLButtonElement> document.getElementById("btn");

let editTask = () => {
    console.log("edit this task");
    
}

let deleteTask = () => {
    console.log("delete this task");
    
}
    
pen.forEach((item) => {
    item.addEventListener("click", editTask)})


trash.forEach((item) => {
    item.addEventListener("click", deleteTask)});

button.addEventListener("click", newTask);
}    


// function deleteTask (_event:MouseEvent): void {
//     console.log("delete this task");
// }

function newTask (_event:MouseEvent): void {
    console.log("create a new task");
}




}