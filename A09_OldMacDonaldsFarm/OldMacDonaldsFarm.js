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
    let dog = new L09_OldMacDonaldsFarm.Animal("Bruno", "dog", "woof", "meat", 20);
    let cat = new L09_OldMacDonaldsFarm.Animal("Angora", "cat", "miow", "fish", 4);
    let pig = new L09_OldMacDonaldsFarm.Animal("Trudi", "pig", "oink", "oats", 1);
    let chicken = new L09_OldMacDonaldsFarm.Animal("Hannelore", "chicken", "gack", "wheat", 2);
    let cow = new L09_OldMacDonaldsFarm.Animal("Klaus", "cow", "muh", "gras", 3);
    let farmanimals = [dog, cat, pig, chicken, cow];
    let FoodStorage = [
        { type: "meat", storageAmount: 120 },
        { type: "fish", storageAmount: 30 },
        { type: "oats", storageAmount: 30 },
        { type: "wheat", storageAmount: 45 },
        { type: "gras", storageAmount: 50 }
    ];
    let button = document.querySelector("#nextDay");
    let x = 0;
    function handleLoad(_event) {
        button.addEventListener("click", singAndEat);
        let storageDiv = document.getElementById("food");
        storageDiv.innerHTML = "<br><h2>food storage</h2>" +
            FoodStorage[0].storageAmount + " kg " + farmanimals[0].food + "<br>" +
            FoodStorage[1].storageAmount + " kg " + farmanimals[1].food + "<br>" +
            FoodStorage[2].storageAmount + " kg " + farmanimals[2].food + "<br>" +
            FoodStorage[3].storageAmount + " kg " + farmanimals[3].food + "<br>" +
            FoodStorage[4].storageAmount + " kg " + farmanimals[4].food + "<br>";
    }
    ;
    function singAndEat() {
        let textArea = document.getElementById("textarea");
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
        newDay();
    }
    function newDay() {
        for (let index = 0; index < farmanimals.length; index++) {
            FoodStorage[index].storageAmount -= farmanimals[index].portion;
        }
        ;
        let storageDiv = document.getElementById("food");
        storageDiv.innerHTML = "<h2>food storage</h2>" +
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