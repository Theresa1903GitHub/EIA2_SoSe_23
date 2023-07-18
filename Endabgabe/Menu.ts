namespace Endabgabe_Eisdealer {
    /*
        Aufgabe: Endabgabe_Eisdealer
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 03.07.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1&2
        */

    window.addEventListener("load", handleLoad);

    export interface Sundae {
        name: string;
        flavor: string;
        iceballs: string;
        cream: boolean;
        sauce: string;
        sprinkles: boolean;
        price: string;
    }

    export interface menu {
        [name: string]: Sundae[];
    }

    async function handleLoad(): Promise<void> {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btn");
        button.addEventListener("click", newRecipe);
        
        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=find&collection=Recipes");
        let sundae: string = await response.text();
        let data: menu = JSON.parse(sundae);
        console.log(data);
        
        generateNewSundae(data);
    }

    async function newRecipe(): Promise<void> {
        let Title: HTMLInputElement = <HTMLInputElement>document.querySelector("#recipeTitle");
        let Flavor: HTMLInputElement = <HTMLInputElement>document.querySelector("#flavor");
        let Iceballs: HTMLInputElement = <HTMLInputElement>document.querySelector("#iceballs");
        let Cream: HTMLInputElement = <HTMLInputElement>document.querySelector("#cream");
        let Sauce: HTMLInputElement = <HTMLInputElement>document.querySelector("#sauce");
        let Sprinkles: HTMLInputElement = <HTMLInputElement>document.querySelector("#sprinkles");
        let Price: HTMLInputElement = <HTMLInputElement>document.querySelector("#price");
        
        let newSundae: Sundae = 
        {   name: Title.value, 
            flavor: Flavor.value, 
            iceballs: Iceballs.value, 
            cream: Cream.checked, 
            sauce: Sauce.value, 
            sprinkles: Sprinkles.checked, 
            price: Price.value  }

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
    };
}
