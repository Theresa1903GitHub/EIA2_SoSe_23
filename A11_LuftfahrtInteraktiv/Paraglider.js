"use strict";
var L11_LuftfahrtInteraktiv;
(function (L11_LuftfahrtInteraktiv) {
    class Paraglider extends L11_LuftfahrtInteraktiv.Moveable {
        activity;
        color;
        constructor() {
            let randomX = Math.random() * (L11_LuftfahrtInteraktiv.crc2.canvas.width - 100);
            let position = new L11_LuftfahrtInteraktiv.Vector(randomX + 100, 271);
            let velocity = new L11_LuftfahrtInteraktiv.Vector(-50, 0);
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
            L11_LuftfahrtInteraktiv.crc2.save();
            L11_LuftfahrtInteraktiv.crc2.translate(this.position.x, this.position.y);
            if (this.activity == "fly") {
                // Paraglider 
                // Schirm
                L11_LuftfahrtInteraktiv.crc2.beginPath();
                L11_LuftfahrtInteraktiv.crc2.moveTo(0, 18);
                L11_LuftfahrtInteraktiv.crc2.lineTo(-20, -15);
                L11_LuftfahrtInteraktiv.crc2.closePath();
                L11_LuftfahrtInteraktiv.crc2.strokeStyle = "black";
                L11_LuftfahrtInteraktiv.crc2.stroke();
                L11_LuftfahrtInteraktiv.crc2.beginPath();
                L11_LuftfahrtInteraktiv.crc2.moveTo(0, 18);
                L11_LuftfahrtInteraktiv.crc2.lineTo(20, -15);
                L11_LuftfahrtInteraktiv.crc2.closePath();
                L11_LuftfahrtInteraktiv.crc2.strokeStyle = "black";
                L11_LuftfahrtInteraktiv.crc2.stroke();
                L11_LuftfahrtInteraktiv.crc2.beginPath();
                L11_LuftfahrtInteraktiv.crc2.ellipse(0, -18, 25, 8, 0, 0, 2 * Math.PI, true);
                L11_LuftfahrtInteraktiv.crc2.closePath();
                L11_LuftfahrtInteraktiv.crc2.fillStyle = this.color;
                L11_LuftfahrtInteraktiv.crc2.fill();
                // Person
                L11_LuftfahrtInteraktiv.crc2.beginPath();
                L11_LuftfahrtInteraktiv.crc2.moveTo(0, 0);
                L11_LuftfahrtInteraktiv.crc2.lineTo(-10, 30);
                L11_LuftfahrtInteraktiv.crc2.lineTo(10, 30);
                L11_LuftfahrtInteraktiv.crc2.closePath();
                L11_LuftfahrtInteraktiv.crc2.fillStyle = this.color;
                L11_LuftfahrtInteraktiv.crc2.fill();
                L11_LuftfahrtInteraktiv.crc2.beginPath();
                L11_LuftfahrtInteraktiv.crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
                L11_LuftfahrtInteraktiv.crc2.fillStyle = "#d1bc8a";
                L11_LuftfahrtInteraktiv.crc2.closePath();
                L11_LuftfahrtInteraktiv.crc2.fill();
                L11_LuftfahrtInteraktiv.crc2.restore();
            }
            else {
                // Kletterer/Wanderer
                L11_LuftfahrtInteraktiv.crc2.beginPath();
                L11_LuftfahrtInteraktiv.crc2.moveTo(0, 0);
                L11_LuftfahrtInteraktiv.crc2.lineTo(-10, 30);
                L11_LuftfahrtInteraktiv.crc2.lineTo(10, 30);
                L11_LuftfahrtInteraktiv.crc2.closePath();
                L11_LuftfahrtInteraktiv.crc2.fillStyle = this.color;
                L11_LuftfahrtInteraktiv.crc2.fill();
                L11_LuftfahrtInteraktiv.crc2.beginPath();
                L11_LuftfahrtInteraktiv.crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
                L11_LuftfahrtInteraktiv.crc2.fillStyle = "#d1bc8a";
                L11_LuftfahrtInteraktiv.crc2.closePath();
                L11_LuftfahrtInteraktiv.crc2.fill();
                L11_LuftfahrtInteraktiv.crc2.restore();
            }
        }
        move(_timeslice) {
            // fly
            if (this.activity == "fly") {
                let offset = new L11_LuftfahrtInteraktiv.Vector(this.velocity.x * L11_LuftfahrtInteraktiv.strength, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y > 270) {
                    this.activity = "walk";
                    if (this.position.x >= 100) {
                        this.velocity.set(-50, 0);
                    }
                    else {
                        this.velocity.set(50, 0);
                    }
                }
            }
            if (this.activity == "walk") {
                let offset = new L11_LuftfahrtInteraktiv.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.x <= 100) {
                    this.activity = "climb";
                    this.velocity.set(0, -50);
                }
            }
            if (this.activity == "climb") {
                let offset = new L11_LuftfahrtInteraktiv.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y <= 122) {
                    this.activity = "fly";
                    if (L11_LuftfahrtInteraktiv.direction == true) {
                        this.velocity.set(100, 40);
                    }
                    else {
                        this.velocity.set(-100, 40);
                    }
                }
            }
        }
        isHit(_hotspot) {
            let hitsize = 30;
            let difference = new L11_LuftfahrtInteraktiv.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    L11_LuftfahrtInteraktiv.Paraglider = Paraglider;
})(L11_LuftfahrtInteraktiv || (L11_LuftfahrtInteraktiv = {}));
//# sourceMappingURL=Paraglider.js.map