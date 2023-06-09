namespace L04_Aufgabenliste_Datenstruktur {
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

    export let data: toDoList = {
        Input: [
            { title: "Einkaufen", comment: "Denk an die Milch :)", name: "Lisa", date: "2023-04-23", time: "14:00", done: true },
            { title: "Kochen", comment: "Spaghetti Bolognese", name: "Franziska", date: "2023-04-18", time: "12:00", done: false },
            { title: "Abwasch", comment: "imagine there was a real comment and you could read it here. Don't know what to write here, but I need a longer text to see how it flows...", name: "Franziska", date: "2023-04-17", time: "20:00", done: true },
        ]
    };
    }