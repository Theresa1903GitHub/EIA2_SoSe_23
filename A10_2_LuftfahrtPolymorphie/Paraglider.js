"use strict";
var L10_2_LuftfahrtPolymorphie;
(function (L10_2_LuftfahrtPolymorphie) {
    class Paraglider extends L10_2_LuftfahrtPolymorphie.Moveable {
        activity;
        color;
        constructor() {
            let randomX = Math.random() * (L10_2_LuftfahrtPolymorphie.crc2.canvas.width - 100);
            let position = new L10_2_LuftfahrtPolymorphie.Vector(randomX + 100, 271);
            let velocity = new L10_2_LuftfahrtPolymorphie.Vector(-50, 0);
            super(position, velocity);
            // let randomX: number = Math.random()*(crc2.canvas.width - 100);
            // this.position = new Vector(randomX+100, 271);
            // this.velocity = new Vector (45,45);
            let h = Math.random() * 360;
            let s = Math.random() * 100;
            let l = Math.random() * 100;
            this.color = "hsl(" + h + "," + s + "% , " + l + "%)";
            this.activity = "walk";
        }
        draw() {
            L10_2_LuftfahrtPolymorphie.crc2.save();
            L10_2_LuftfahrtPolymorphie.crc2.translate(this.position.x, this.position.y);
            if (this.activity == "fly") {
                // Paraglider 
                // Schirm
                L10_2_LuftfahrtPolymorphie.crc2.beginPath();
                L10_2_LuftfahrtPolymorphie.crc2.moveTo(0, 18);
                L10_2_LuftfahrtPolymorphie.crc2.lineTo(-20, -15);
                L10_2_LuftfahrtPolymorphie.crc2.closePath();
                L10_2_LuftfahrtPolymorphie.crc2.strokeStyle = "black";
                L10_2_LuftfahrtPolymorphie.crc2.stroke();
                L10_2_LuftfahrtPolymorphie.crc2.beginPath();
                L10_2_LuftfahrtPolymorphie.crc2.moveTo(0, 18);
                L10_2_LuftfahrtPolymorphie.crc2.lineTo(20, -15);
                L10_2_LuftfahrtPolymorphie.crc2.closePath();
                L10_2_LuftfahrtPolymorphie.crc2.strokeStyle = "black";
                L10_2_LuftfahrtPolymorphie.crc2.stroke();
                L10_2_LuftfahrtPolymorphie.crc2.beginPath();
                L10_2_LuftfahrtPolymorphie.crc2.ellipse(0, -18, 25, 8, 0, 0, 2 * Math.PI, true);
                L10_2_LuftfahrtPolymorphie.crc2.closePath();
                L10_2_LuftfahrtPolymorphie.crc2.fillStyle = this.color;
                L10_2_LuftfahrtPolymorphie.crc2.fill();
                // Person
                L10_2_LuftfahrtPolymorphie.crc2.beginPath();
                L10_2_LuftfahrtPolymorphie.crc2.moveTo(0, 0);
                L10_2_LuftfahrtPolymorphie.crc2.lineTo(-10, 30);
                L10_2_LuftfahrtPolymorphie.crc2.lineTo(10, 30);
                L10_2_LuftfahrtPolymorphie.crc2.closePath();
                L10_2_LuftfahrtPolymorphie.crc2.fillStyle = this.color;
                L10_2_LuftfahrtPolymorphie.crc2.fill();
                L10_2_LuftfahrtPolymorphie.crc2.beginPath();
                L10_2_LuftfahrtPolymorphie.crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
                L10_2_LuftfahrtPolymorphie.crc2.fillStyle = "#d1bc8a";
                L10_2_LuftfahrtPolymorphie.crc2.closePath();
                L10_2_LuftfahrtPolymorphie.crc2.fill();
                L10_2_LuftfahrtPolymorphie.crc2.restore();
            }
            else {
                // Kletterer/Wanderer
                L10_2_LuftfahrtPolymorphie.crc2.beginPath();
                L10_2_LuftfahrtPolymorphie.crc2.moveTo(0, 0);
                L10_2_LuftfahrtPolymorphie.crc2.lineTo(-10, 30);
                L10_2_LuftfahrtPolymorphie.crc2.lineTo(10, 30);
                L10_2_LuftfahrtPolymorphie.crc2.closePath();
                L10_2_LuftfahrtPolymorphie.crc2.fillStyle = this.color;
                L10_2_LuftfahrtPolymorphie.crc2.fill();
                L10_2_LuftfahrtPolymorphie.crc2.beginPath();
                L10_2_LuftfahrtPolymorphie.crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
                L10_2_LuftfahrtPolymorphie.crc2.fillStyle = "#d1bc8a";
                L10_2_LuftfahrtPolymorphie.crc2.closePath();
                L10_2_LuftfahrtPolymorphie.crc2.fill();
                L10_2_LuftfahrtPolymorphie.crc2.restore();
            }
        }
        move(_timeslice) {
            // fly
            if (this.activity == "fly") {
                let offset = new L10_2_LuftfahrtPolymorphie.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y > 270) {
                    this.activity = "walk";
                    this.velocity.set(-50, 0);
                }
            }
            if (this.activity == "walk") {
                let offset = new L10_2_LuftfahrtPolymorphie.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.x <= 100) {
                    this.activity = "climb";
                    this.velocity.set(0, -50);
                }
            }
            if (this.activity == "climb") {
                let offset = new L10_2_LuftfahrtPolymorphie.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y <= 122) {
                    this.activity = "fly";
                    this.velocity.set(100, 40);
                }
            }
        }
    }
    L10_2_LuftfahrtPolymorphie.Paraglider = Paraglider;
})(L10_2_LuftfahrtPolymorphie || (L10_2_LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Paraglider.js.map