namespace L09_OldMacDonaldsFarm {

    export class Animal {
     name: string;
     type: string;
     sound: string;
     food: string;
     portion: number;
    
    constructor(_name: string, _type: string, _sound: string, _food: string, _portion: number) {
        this.name = _name;
        this.type = _type;
        this.sound = _sound;
        this.food = _food;
        this.portion = _portion;
        }

    sing(): string {
        return `<h3>${this.name} the ${this.type}</h3> 
        Old MacDonald had a farm, E-I-E-I-O! <br>
        And on that farm he had a ${this.type}, E-I-E-I-O! <br>
        With a ${this.sound}-${this.sound} here, and a ${this.sound}-${this.sound} there, <br>
        here a ${this.sound}, there a ${this.sound}, everywhere a ${this.sound}-${this.sound}. <br>
        Old MacDonald had a farm, E-I-E-I-O! <br>`;
        }
    
    eat(): string {
        return `<br>You feed ${this.name} ${this.portion} kg of ${this.food}.<br>`;
    }

    }
}