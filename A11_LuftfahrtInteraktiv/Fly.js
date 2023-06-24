"use strict";
var L11_LuftfahrtInteraktiv;
(function (L11_LuftfahrtInteraktiv) {
    class Fly extends L11_LuftfahrtInteraktiv.Moveable {
        rotation;
        constructor(_rotation) {
            let randomX = Math.random() * L11_LuftfahrtInteraktiv.crc2.canvas.width;
            let randomY = Math.random() * L11_LuftfahrtInteraktiv.crc2.canvas.height;
            let position = new L11_LuftfahrtInteraktiv.Vector(randomX, randomY);
            let velocity = new L11_LuftfahrtInteraktiv.Vector(150, Math.tan(_rotation) * 30);
            super(position, velocity);
            this.rotation = _rotation;
        }
        draw() {
            L11_LuftfahrtInteraktiv.crc2.save();
            L11_LuftfahrtInteraktiv.crc2.translate(this.position.x, this.position.y);
            L11_LuftfahrtInteraktiv.crc2.beginPath();
            L11_LuftfahrtInteraktiv.crc2.arc(0, 0, 2, 0, 2 * Math.PI, true);
            L11_LuftfahrtInteraktiv.crc2.closePath();
            L11_LuftfahrtInteraktiv.crc2.fillStyle = "black";
            L11_LuftfahrtInteraktiv.crc2.fill();
            L11_LuftfahrtInteraktiv.crc2.beginPath();
            L11_LuftfahrtInteraktiv.crc2.ellipse(0, 0, 2, 5, this.rotation, 0, 2 * Math.PI, true);
            L11_LuftfahrtInteraktiv.crc2.closePath();
            L11_LuftfahrtInteraktiv.crc2.strokeStyle = "black";
            L11_LuftfahrtInteraktiv.crc2.stroke();
            L11_LuftfahrtInteraktiv.crc2.restore();
        }
    }
    L11_LuftfahrtInteraktiv.Fly = Fly;
})(L11_LuftfahrtInteraktiv || (L11_LuftfahrtInteraktiv = {}));
//# sourceMappingURL=Fly.js.map