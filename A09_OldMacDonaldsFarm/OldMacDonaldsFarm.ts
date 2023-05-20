namespace L09_OldMacDonaldsFarm {

        /*
        Aufgabe: 09_OldMacDonaldsFarm
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 19.05.23
        Zusammenarbeit: -
        Quellen: Inverted Classroom Jirka
        */

    window.addEventListener("load", handleLoad);

    let dog: Animal = new Animal("Bruno", "dog", "woof", "meat", 0.5);
    let cat: Animal = new Animal("Angora", "cat", "miow", "fish", 0.2);
    let pig: Animal = new Animal("Trudi", "pig", "oink", "oats", 2.5);
    let chicken: Animal = new Animal("Hannelore", "chicken", "gack", "wheat", 0.1);
    let cow: Animal = new Animal("Klaus", "cow", "muh", "gras", 50);
    let farmanimals: Animal[] = [dog, cat, pig, chicken, cow];

    interface Food {
        type: string;
        storageAmount: number;
    }

    let FoodStorage : Food[] = [
            {type: "meat", storageAmount: 10},
            {type: "fish", storageAmount: 8},
            {type: "oats", storageAmount: 30},
            {type: "wheat", storageAmount: 2},
            {type: "gras", storageAmount: 300}] 

    let button: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#nextDay");
    let x: number = 0;

    function handleLoad(_event: Event): void {
        button.addEventListener("click", singAndEat);

        let storageDiv: HTMLElement = <HTMLElement> document.getElementById("food");
        storageDiv.innerHTML = "<br><h2>Feed storage</h2>"  + 
        FoodStorage[0].storageAmount + " kg " + farmanimals[0].food  + "<br>" + 
        FoodStorage[1].storageAmount + " kg " + farmanimals[1].food  + "<br>" +
        FoodStorage[2].storageAmount + " kg " + farmanimals[2].food  + "<br>" +
        FoodStorage[3].storageAmount + " kg " + farmanimals[3].food  + "<br>" +
        FoodStorage[4].storageAmount + " kg " + farmanimals[4].food  + "<br>" ;
    };

    function singAndEat(): void {
        let textArea: HTMLElement = <HTMLDivElement>document.getElementById("song");
        let paragraph: HTMLParagraphElement;
        
       
        for (let i: number = 0; i < farmanimals.length; i++) {
            paragraph = document.createElement("p");
            paragraph.innerHTML = farmanimals[i].sing() + farmanimals[i].eat();
            textArea.insertBefore(paragraph, textArea.firstChild);    
        }

        let nextDay : HTMLHeadingElement = document.createElement("h2");
        x++;
        nextDay.innerHTML = "Day " + x;
        textArea.insertBefore(nextDay, textArea.firstChild);

        newDay();
    }

    function newDay(): void { 

        for (let index: number = 0; index < farmanimals.length; index++) {
          FoodStorage[index].storageAmount -= farmanimals[index].portion;
        };

        let storageDiv: HTMLElement = <HTMLElement> document.getElementById("food");
        storageDiv.innerHTML = "<br><h2>Feed storage</h2>"  + 
        FoodStorage[0].storageAmount + " kg " + farmanimals[0].food  + "<br>" + 
        FoodStorage[1].storageAmount + " kg " + farmanimals[1].food  + "<br>" +
        FoodStorage[2].storageAmount + " kg " + farmanimals[2].food  + "<br>" +
        FoodStorage[3].storageAmount + " kg " + farmanimals[3].food  + "<br>" +
        FoodStorage[4].storageAmount + " kg " + farmanimals[4].food  + "<br>" ;

        for (let index: number = 0; index < farmanimals.length; index++) {
            if (FoodStorage[index].storageAmount <= 0) {
                alert("Old MacDonald is running out of food!");
            }
        };

    }

}
