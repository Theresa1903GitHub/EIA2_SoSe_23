"use strict";
var Poem;
(function (Poem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjects);
    console.log(verbs);
    console.log(objects);
    for (let x = subjects.length; x >= 1; x--) {
        console.log(x);
    }
    function getVerse(_subject, _verb, _object) {
        //console.log(_x);			
        //return _subject + " " + _verb + " " + _object;
        console.log(_subject + " " + _verb + " " + _object);
    }
    ;
    getVerse("Alo", "mo", "loa");
})(Poem || (Poem = {}));
//# sourceMappingURL=RandomPoem.js.map