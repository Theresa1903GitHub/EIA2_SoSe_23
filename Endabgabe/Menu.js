"use strict";
var Endabgabe_Eisdealer;
(function (Endabgabe_Eisdealer) {
    /*
        Aufgabe: Endabgabe_Eisdealer
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 03.07.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1&2
        */
    window.addEventListener("load", handleLoad);
    async function handleLoad() {
        let button = document.getElementById("btn");
        button.addEventListener("click", newRecipe);
        let response = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=find&collection=Recipes");
        let sundae = await response.text();
        let data = JSON.parse(sundae);
        console.log(data);
        Endabgabe_Eisdealer.generateNewSundae(data);
    }
    async function newRecipe() {
        let Title = document.querySelector("#recipeTitle");
        let Flavor = document.querySelector("#flavor");
        let Iceballs = document.querySelector("#iceballs");
        let Cream = document.querySelector("#cream");
        let Sauce = document.querySelector("#sauce");
        let Sprinkles = document.querySelector("#sprinkles");
        let Price = document.querySelector("#price");
        let newSundae = { name: Title.value,
            flavor: Flavor.value,
            iceballs: Iceballs.value,
            cream: Cream.checked,
            sauce: Sauce.value,
            sprinkles: Sprinkles.checked,
            price: Price.value };
        let query = JSON.stringify(newSundae);
        console.log(query);
        await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=insert&collection=Recipes&data=" + query);
        Title.value = "Recipe";
        Flavor.value = "Schokolade";
        Iceballs.value = "0";
        Cream.checked = false;
        Sauce.value = "Erdbeersoße";
        Sprinkles.checked = false;
        Price.value = "Price";
    }
    ;
})(Endabgabe_Eisdealer || (Endabgabe_Eisdealer = {}));
//# sourceMappingURL=Menu.js.map