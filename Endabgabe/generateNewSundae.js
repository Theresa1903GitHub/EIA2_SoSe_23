"use strict";
var Endabgabe_Eisdealer;
(function (Endabgabe_Eisdealer) {
    async function generateNewSundae(_data) {
        let Menu = [];
        for (let x in _data.data) {
            Menu.push(x);
        }
        for (let i of Menu) {
            let newSundaeDiv = document.createElement("form");
            newSundaeDiv.classList.add("newSundae");
            let menu = document.getElementById("menu");
            menu.appendChild(newSundaeDiv);
            let Subgroup = document.createElement("div");
            Subgroup.classList.add("subgroup");
            newSundaeDiv.appendChild(Subgroup);
            let Title = document.createElement("input");
            Title.type = "text";
            Title.value = _data.data[i].name;
            Title.classList.add("taskText");
            Subgroup.appendChild(Title);
            let Space = document.createElement("div");
            Space.classList.add("space");
            Subgroup.appendChild(Space);
            let Flavor = document.createElement("input");
            Flavor.classList.add("dateUndone");
            Flavor.id = "DateTime";
            Subgroup.appendChild(Flavor);
            let Iceballs = document.createElement("input");
            Iceballs.type = "number";
            Iceballs.classList.add("dates");
            Iceballs.value = _data.data[i].iceballs;
            Subgroup.appendChild(Iceballs);
            let Cream = document.createElement("input");
            Cream.type = "checkbox";
            Cream.classList.add("dates");
            Cream.checked = _data.data[i].cream;
            Subgroup.appendChild(Cream);
            let Group1 = document.createElement("div");
            Group1.classList.add("group1");
            newSundaeDiv.appendChild(Group1);
            let Sauce = document.createElement("input");
            Sauce.classList.add("comments");
            Sauce.value = _data.data[i].sauce;
            newSundaeDiv.appendChild(Sauce);
            let Sprinkles = document.createElement("input");
            Sprinkles.type = "checkbox";
            Sprinkles.classList.add("mediumbold", "name");
            Sprinkles.checked = _data.data[i].sprinkles;
            newSundaeDiv.appendChild(Sprinkles);
            let Subgroup1 = document.createElement("div");
            Subgroup1.classList.add("subgroup1");
            newSundaeDiv.appendChild(Subgroup1);
            // let inProgress: HTMLInputElement = document.createElement("input");
            // inProgress.type = "radio";
            // inProgress.id = _data.data[i].title  + "Progress";
            // inProgress.value = _data.data[i].name;
            // inProgress.name = "radio" + i;
            // let LabelProgress : HTMLLabelElement = document.createElement("label");
            // LabelProgress.textContent = "in progress";
            // LabelProgress.classList.add("medium");
            // LabelProgress.classList.add("label");
            // LabelProgress.htmlFor = _data.data[i].title + "Progress";
            // Subgroup1.appendChild(inProgress);
            // Subgroup1.appendChild(LabelProgress);
            // let done: HTMLInputElement = document.createElement("input");
            // done.type = "radio";
            // done.id = _data.data[i].title + "Done";
            // done.value = _data.data[i].name;
            // done.name = "radio" + i;
            // let LabelDone : HTMLLabelElement = document.createElement("label");
            // LabelDone.textContent = "done";
            // LabelDone.classList.add("medium");
            // LabelDone.classList.add("label");
            // LabelDone.htmlFor = _data.title + "Done";
            // Subgroup1.appendChild(done);
            // Subgroup1.appendChild(LabelDone);
            let Price = document.createElement("input");
            let Trash = document.createElement("img");
            Trash.setAttribute("src", "./images/u8.svg");
            Trash.classList.add("trash");
            Trash.addEventListener("click", async function () {
                await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=delete&collection=Recipes&id=" + i);
                deleteTask(newSundaeDiv, Space);
            });
            newSundaeDiv.addEventListener("change", function () {
                editTask();
            });
            async function editTask() {
                let changedName = Title.value;
                let changedFlavor = Flavor.value;
                let changedIceballs = Iceballs.value;
                let changedCream = Cream.checked;
                let changedSauce = Sauce.value;
                let changedSprinkles = Sprinkles.checked;
                let changedPrice = Price.value;
                let changedTaskInput = {
                    name: changedName,
                    flavor: changedFlavor,
                    iceballs: changedIceballs,
                    cream: changedCream,
                    sauce: changedSauce,
                    sprinkles: changedSprinkles,
                    price: changedPrice
                };
                let query = JSON.stringify(changedTaskInput);
                await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=update&collection=Recipes&id=" + i + "&data=" + query);
            }
            ;
            Subgroup1.appendChild(Trash);
            menu.appendChild(Space);
        }
        ;
        async function deleteTask(_data, _data2) {
            let menu = document.getElementById("menu");
            menu.removeChild(_data);
            menu.removeChild(_data2);
        }
        ;
    }
    Endabgabe_Eisdealer.generateNewSundae = generateNewSundae;
})(Endabgabe_Eisdealer || (Endabgabe_Eisdealer = {}));
//# sourceMappingURL=generateNewSundae.js.map