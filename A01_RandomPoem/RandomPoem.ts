namespace Poem {

    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"]
    // console.log(subjects);
    // console.log(verbs);
    // console.log(objects);

    // let array1 :string [] = [];
    // let array2 :string [] = [];
    // let array3 :string [] = [];

    // let verse : string = "";

    // console.log(randomSubject);
    // console.log(randomVerb);
    // console.log(randomObject);

    // subjects.splice(randomSubject,1);
    // verbs.splice(randomVerb,1);
    // objects.splice(randomObject,1);


    for (let x: number = subjects.length; x >= 1; x--) {
        let output = getVerse(subjects, verbs, objects)
        console.log(output);
        
    }

    function getVerse(_subject: string[], _verb: string[], _object: string[]): string {
        let randomSubject: number = Math.floor(Math.random() * _subject.length);
        let randomObject: number = Math.floor(Math.random() * _object.length);
        let randomVerb: number = Math.floor(Math.random() * _verb.length);
        let verse: string = _subject[randomSubject] + " " + _verb[randomVerb] + " " + _object[randomObject];

        _subject.splice(randomSubject, 1);
        _verb.splice(randomVerb, 1);
        _object.splice(randomObject, 1);

        // console.log(verse);
        return verse;

    };


}

