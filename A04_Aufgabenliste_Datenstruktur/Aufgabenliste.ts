namespace L04_Aufgabenliste_Datenstruktur {
    /*
        Aufgabe: 04_Aufgabenliste
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 15.04.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1
        */

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        generateContent(data);

        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btn");
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

    function newTask(_event: MouseEvent): void {
        let Title: HTMLInputElement = <HTMLInputElement>document.querySelector("#inputText");
        let Comment: HTMLInputElement = <HTMLInputElement>document.querySelector("#comment");
        let Name: HTMLInputElement = <HTMLInputElement>document.querySelector("#AddName");
        let Date: HTMLInputElement = <HTMLInputElement>document.querySelector("#date");
        let Time: HTMLInputElement = <HTMLInputElement>document.querySelector("#time");
        
        let newTaskInput: Task = {title: Title.value, comment: Comment.value, name: Name.value, date: Date.value, time: Time.value, done: false }
        
        data.Input.unshift(newTaskInput);



        console.log(data);
        
        generateContent(data);

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

}