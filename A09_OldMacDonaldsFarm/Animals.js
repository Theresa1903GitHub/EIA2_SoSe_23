"use strict";
var L09_OldMacDonaldsFarm;
(function (L09_OldMacDonaldsFarm) {
    class Animal {
        name;
        type;
        sound;
        food;
        portion;
        constructor(_name, _type, _sound, _food, _portion) {
            this.name = _name;
            this.type = _type;
            this.sound = _sound;
            this.food = _food;
            this.portion = _portion;
        }
        sing() {
            return `<h3>${this.name} the ${this.type}</h3> 
        Old MacDonald had a farm, E-I-E-I-O! <br>
        And on that farm he had a ${this.type}, E-I-E-I-O! <br>
        With a ${this.sound}-${this.sound} here, and a ${this.sound}-${this.sound} there, <br>
        here a ${this.sound}, there a ${this.sound}, everywhere a ${this.sound}-${this.sound}. <br>
        Old MacDonald had a farm E-I-E-I-O! <br>`;
        }
        eat() {
            return `<br>You feed ${this.name} ${this.portion} kg of ${this.food}.<br>`;
        }
    }
    L09_OldMacDonaldsFarm.Animal = Animal;
})(L09_OldMacDonaldsFarm || (L09_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animals.js.map