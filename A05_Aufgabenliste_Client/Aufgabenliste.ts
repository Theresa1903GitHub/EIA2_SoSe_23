namespace L05_Aufgabenliste_Client {
    /*
        Aufgabe: 05_Aufgabenliste_Client
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 15.04.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1
        */

    export interface Task {
        title: string;
        comment: string;
        name: string;
        date: string;
        time: string;
        done: boolean;
    }

    export interface toDoList {
        [name: string]: Task[];
    }

    window.addEventListener("load", handleLoad);

    async function handleLoad(): Promise<void> {
        console.log("async");
        
        let response: Response = await fetch("data.json");
        let task: string = await response.text();
        let data: toDoList = JSON.parse(task);
        
        generateContent(data);

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btn");
    button.addEventListener("click", newTask);

    }

   async function newTask(_event: MouseEvent): Promise<void> {
        let Title: HTMLInputElement = <HTMLInputElement>document.querySelector("#inputText");
        let Comment: HTMLInputElement = <HTMLInputElement>document.querySelector("#comment");
        let Name: HTMLInputElement = <HTMLInputElement>document.querySelector("#AddName");
        let Date: HTMLInputElement = <HTMLInputElement>document.querySelector("#date");
        let Time: HTMLInputElement = <HTMLInputElement>document.querySelector("#time");
        
        let newTaskInput: Task = {title: Title.value, comment: Comment.value, name: Name.value, date: Date.value, time: Time.value, done: false }
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
    };

}