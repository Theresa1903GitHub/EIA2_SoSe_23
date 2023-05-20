"use strict";
var L09_OldMacDonaldsFarm;
(function (L09_OldMacDonaldsFarm) {
    /*
    Aufgabe: 09_OldMacDonaldsFarm
    Name: Theresa Hauser
    Matrikel: 272983
    Datum: 19.05.23
    Zusammenarbeit: -
    Quellen: Inverted Classroom Jirka
    */
    window.addEventListener("load", handleLoad);
    let dog = new L09_OldMacDonaldsFarm.Animal("Bruno", "dog", "woof", "meat", 0.5);
    let cat = new L09_OldMacDonaldsFarm.Animal("Angora", "cat", "miow", "fish", 0.2);
    let pig = new L09_OldMacDonaldsFarm.Animal("Trudi", "pig", "oink", "oats", 2.5);
    let chicken = new L09_OldMacDonaldsFarm.Animal("Hannelore", "chicken", "gack", "wheat", 0.1);
    let cow = new L09_OldMacDonaldsFarm.Animal("Klaus", "cow", "muh", "gras", 50);
    let farmanimals = [dog, cat, pig, chicken, cow];
    let button = document.querySelector("#nextDay");
    let x = 0;
    function handleLoad(_event) {
        button.addEventListener("click", newDay);
        let FoodStorage = [
            { type: "meat", storageAmount: 10 },
            { type: "fish", storageAmount: 8 },
            { type: "oats", storageAmount: 30 },
            { type: "wheat", storageAmount: 2 },
            { type: "gras", storageAmount: 300 }
        ];
        let storageDiv = document.getElementById("food");
        storageDiv.innerHTML = "<br><h2>Feed storage</h2>" +
            FoodStorage[0].storageAmount + " kg " + farmanimals[0].food + "<br>" +
            FoodStorage[1].storageAmount + " kg " + farmanimals[1].food + "<br>" +
            FoodStorage[2].storageAmount + " kg " + farmanimals[2].food + "<br>" +
            FoodStorage[3].storageAmount + " kg " + farmanimals[3].food + "<br>" +
            FoodStorage[4].storageAmount + " kg " + farmanimals[4].food + "<br>";
    }
    ;
    function newDay() {
        let textArea = document.getElementById("song");
        let paragraph;
        for (let i = 0; i < farmanimals.length; i++) {
            paragraph = document.createElement("p");
            paragraph.innerHTML = farmanimals[i].sing() + farmanimals[i].eat();
            textArea.insertBefore(paragraph, textArea.firstChild);
        }
        let nextDay = document.createElement("h2");
        x++;
        nextDay.innerHTML = "Day " + x;
        textArea.insertBefore(nextDay, textArea.firstChild);
        dailyFeeding();
    }
    function dailyFeeding() {
        for (let index = 0; index < farmanimals.length; index++) {
            FoodStorage[index].storageAmount -= farmanimals[index].portion;
        }
        ;
        let storageDiv = document.getElementById("food");
        storageDiv.innerHTML = "<br><h2>Feed storage</h2>" +
            FoodStorage[0].storageAmount + " kg " + farmanimals[0].food + "<br>" +
            FoodStorage[1].storageAmount + " kg " + farmanimals[1].food + "<br>" +
            FoodStorage[2].storageAmount + " kg " + farmanimals[2].food + "<br>" +
            FoodStorage[3].storageAmount + " kg " + farmanimals[3].food + "<br>" +
            FoodStorage[4].storageAmount + " kg " + farmanimals[4].food + "<br>";
        for (let index = 0; index < farmanimals.length; index++) {
            if (FoodStorage[index].storageAmount <= 0) {
                alert("Old MacDonald is running out of food!");
            }
        }
        ;
    }
})(L09_OldMacDonaldsFarm || (L09_OldMacDonaldsFarm = {}));
//# sourceMappingURL=OldMacDonaldsFarm.js.map