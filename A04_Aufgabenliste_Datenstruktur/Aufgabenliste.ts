namespace L04_Aufgabenliste_Datenstruktur{
    /*
        Aufgabe: 04_Aufgabenliste
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 07.04.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1
        */

window.addEventListener("load", handleLoad);

let Title: HTMLInputElement = <HTMLInputElement> document.querySelector("#inputText");
let Comment: HTMLInputElement = <HTMLInputElement> document.querySelector("#comment");
let Name: HTMLInputElement = <HTMLInputElement> document.querySelector("#AddName");
let Date:HTMLInputElement = <HTMLInputElement> document.querySelector("#date");
let Time: HTMLInputElement = <HTMLInputElement> document.querySelector("#time");
// let DateTime : HTMLDivElement = <HTMLDivElement> document.getElementById(_data.Input[x].name + "Done");   

function handleLoad ():void {
    generateContent(data);
    let button : HTMLButtonElement = <HTMLButtonElement> document.getElementById("btn");
    // let done: HTMLInputElement = document.createElement("input");


    button.addEventListener("click", newTask);
    // done.addEventListener("click", TaskDone);
}    

function newTask (_event:MouseEvent): void {
    let newTaskInput: toDoList = {
        Input: [
            { title: Title.value, comment: Comment.value, name: Name.value, date: Date.value, time: Time.value, done: false},
        ]}
  
    generateContent(newTaskInput);
    
    Title.value = "";    
    Comment.value = "";
    Name.value = "Lisa";
    Date.value = "2023-04-15";
    Time.value = "10:00";
}


done.addEventListener("click", function TaskDone(){
    DateTime.classList.add("dateDone");
    DateTime.classList.remove("dateUndone");
    DateTime.classList.remove("dateOver");
});

inProgress.addEventListener("click", function TaskinProgress(){
    DateTime.classList.add("dateUndone");
    DateTime.classList.remove("dateDone");
    DateTime.classList.remove("date");
})
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
    





}