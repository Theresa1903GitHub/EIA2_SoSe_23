"use strict";
var L09_2_LuftfahrtClasses;
(function (L09_2_LuftfahrtClasses) {
    class Paraglider {
        position;
        velocity;
        activity;
        color;
        constructor() {
            let randomX = Math.random() * (L09_2_LuftfahrtClasses.crc2.canvas.width - 100);
            this.position = new L09_2_LuftfahrtClasses.Vector(randomX + 100, 271);
            this.velocity = new L09_2_LuftfahrtClasses.Vector(45, 45);
            let h = Math.random() * 360;
            let s = Math.random() * 100;
            let l = Math.random() * 100;
            this.color = "hsl(" + h + "," + s + "% , " + l + "%)";
        }
        drawParaglider() {
            L09_2_LuftfahrtClasses.crc2.save();
            L09_2_LuftfahrtClasses.crc2.translate(this.position.x, this.position.y);
            // Schirm
            L09_2_LuftfahrtClasses.crc2.beginPath();
            L09_2_LuftfahrtClasses.crc2.moveTo(0, 18);
            L09_2_LuftfahrtClasses.crc2.lineTo(-20, -15);
            L09_2_LuftfahrtClasses.crc2.closePath();
            L09_2_LuftfahrtClasses.crc2.strokeStyle = "black";
            L09_2_LuftfahrtClasses.crc2.stroke();
            L09_2_LuftfahrtClasses.crc2.beginPath();
            L09_2_LuftfahrtClasses.crc2.moveTo(0, 18);
            L09_2_LuftfahrtClasses.crc2.lineTo(20, -15);
            L09_2_LuftfahrtClasses.crc2.closePath();
            L09_2_LuftfahrtClasses.crc2.strokeStyle = "black";
            L09_2_LuftfahrtClasses.crc2.stroke();
            L09_2_LuftfahrtClasses.crc2.beginPath();
            L09_2_LuftfahrtClasses.crc2.ellipse(0, -18, 25, 8, 0, 0, 2 * Math.PI, true);
            L09_2_LuftfahrtClasses.crc2.closePath();
            L09_2_LuftfahrtClasses.crc2.fillStyle = this.color;
            L09_2_LuftfahrtClasses.crc2.fill();
            // Person
            L09_2_LuftfahrtClasses.crc2.beginPath();
            L09_2_LuftfahrtClasses.crc2.moveTo(0, 0);
            L09_2_LuftfahrtClasses.crc2.lineTo(-10, 30);
            L09_2_LuftfahrtClasses.crc2.lineTo(10, 30);
            L09_2_LuftfahrtClasses.crc2.closePath();
            L09_2_LuftfahrtClasses.crc2.fillStyle = this.color;
            L09_2_LuftfahrtClasses.crc2.fill();
            L09_2_LuftfahrtClasses.crc2.beginPath();
            L09_2_LuftfahrtClasses.crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
            L09_2_LuftfahrtClasses.crc2.fillStyle = "#d1bc8a";
            L09_2_LuftfahrtClasses.crc2.closePath();
            L09_2_LuftfahrtClasses.crc2.fill();
            L09_2_LuftfahrtClasses.crc2.restore();
        }
        drawPerson() {
            L09_2_LuftfahrtClasses.crc2.save();
            L09_2_LuftfahrtClasses.crc2.translate(this.position.x, this.position.y);
            console.log("Person");
            L09_2_LuftfahrtClasses.crc2.beginPath();
            L09_2_LuftfahrtClasses.crc2.moveTo(0, 0);
            L09_2_LuftfahrtClasses.crc2.lineTo(-10, 30);
            L09_2_LuftfahrtClasses.crc2.lineTo(10, 30);
            L09_2_LuftfahrtClasses.crc2.closePath();
            L09_2_LuftfahrtClasses.crc2.fillStyle = this.color;
            L09_2_LuftfahrtClasses.crc2.fill();
            L09_2_LuftfahrtClasses.crc2.beginPath();
            L09_2_LuftfahrtClasses.crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
            L09_2_LuftfahrtClasses.crc2.fillStyle = "#d1bc8a";
            L09_2_LuftfahrtClasses.crc2.closePath();
            L09_2_LuftfahrtClasses.crc2.fill();
            L09_2_LuftfahrtClasses.crc2.restore();
        }
        fly(_timeslice) {
            let offset = new L09_2_LuftfahrtClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y > 270) {
                this.activity = "walk";
                this.velocity.set(-50, 0);
            }
        }
        walk(_timeslice) {
            let offset = new L09_2_LuftfahrtClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x <= 100) {
                this.activity = "climb";
                this.velocity.set(0, -50);
            }
        }
        climb(_timeslice) {
            let offset = new L09_2_LuftfahrtClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y <= 122) {
                this.activity = "fly";
                this.velocity.set(100, 40);
            }
        }
    }
    L09_2_LuftfahrtClasses.Paraglider = Paraglider;
})(L09_2_LuftfahrtClasses || (L09_2_LuftfahrtClasses = {}));
//# sourceMappingURL=Paraglider.js.map