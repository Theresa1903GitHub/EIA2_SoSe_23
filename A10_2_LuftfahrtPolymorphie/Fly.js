"use strict";
var L10_2_LuftfahrtPolymorphie;
(function (L10_2_LuftfahrtPolymorphie) {
    class Fly extends L10_2_LuftfahrtPolymorphie.Moveable {
        rotation;
        constructor(_rotation) {
            let randomX = Math.random() * L10_2_LuftfahrtPolymorphie.crc2.canvas.width;
            let randomY = Math.random() * L10_2_LuftfahrtPolymorphie.crc2.canvas.height;
            let position = new L10_2_LuftfahrtPolymorphie.Vector(randomX, randomY);
            let velocity = new L10_2_LuftfahrtPolymorphie.Vector(150, Math.tan(_rotation) * 30);
            super(position, velocity);
            this.rotation = _rotation;
        }
        draw() {
            L10_2_LuftfahrtPolymorphie.crc2.save();
            L10_2_LuftfahrtPolymorphie.crc2.translate(this.position.x, this.position.y);
            L10_2_LuftfahrtPolymorphie.crc2.beginPath();
            L10_2_LuftfahrtPolymorphie.crc2.arc(0, 0, 2, 0, 2 * Math.PI, true);
            L10_2_LuftfahrtPolymorphie.crc2.closePath();
            L10_2_LuftfahrtPolymorphie.crc2.fillStyle = "black";
            L10_2_LuftfahrtPolymorphie.crc2.fill();
            L10_2_LuftfahrtPolymorphie.crc2.beginPath();
            L10_2_LuftfahrtPolymorphie.crc2.ellipse(0, 0, 2, 5, this.rotation, 0, 2 * Math.PI, true);
            L10_2_LuftfahrtPolymorphie.crc2.closePath();
            L10_2_LuftfahrtPolymorphie.crc2.strokeStyle = "black";
            L10_2_LuftfahrtPolymorphie.crc2.stroke();
            L10_2_LuftfahrtPolymorphie.crc2.restore();
        }
    }
    L10_2_LuftfahrtPolymorphie.Fly = Fly;
})(L10_2_LuftfahrtPolymorphie || (L10_2_LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Fly.js.map