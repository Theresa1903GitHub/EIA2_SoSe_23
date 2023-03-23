namespace Poem {

let subjects : string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs : string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects : string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"]

//console.log(subjects);
console.log(verbs);
console.log(objects);

for (let x:number=subjects.length; x>=1; x--){
    console.log(x);
}

function getVerse (_subject:string, _verb:string, _object:string) : void {
    //console.log(_x);			
    //return _subject + " " + _verb + " " + _object;
    console.log(_subject + " " + _verb + " " + _object);
};

getVerse ("Alo", "mo", "loa");

}

