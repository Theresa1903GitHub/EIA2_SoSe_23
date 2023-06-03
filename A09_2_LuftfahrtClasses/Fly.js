"use strict";
var L09_2_LuftfahrtClasses;
(function (L09_2_LuftfahrtClasses) {
    class Fly {
        position;
        velocity;
        rotation;
        constructor(_rotation) {
            let randomX = Math.random() * L09_2_LuftfahrtClasses.crc2.canvas.width;
            let randomY = Math.random() * L09_2_LuftfahrtClasses.crc2.canvas.height;
            this.position = new L09_2_LuftfahrtClasses.Vector(randomX, randomY);
            this.velocity = new L09_2_LuftfahrtClasses.Vector(150, Math.tan(_rotation) * 30);
            this.rotation = _rotation;
        }
        draw() {
            L09_2_LuftfahrtClasses.crc2.save();
            L09_2_LuftfahrtClasses.crc2.translate(this.position.x, this.position.y);
            L09_2_LuftfahrtClasses.crc2.beginPath();
            L09_2_LuftfahrtClasses.crc2.arc(0, 0, 2, 0, 2 * Math.PI, true);
            L09_2_LuftfahrtClasses.crc2.closePath();
            L09_2_LuftfahrtClasses.crc2.fillStyle = "black";
            L09_2_LuftfahrtClasses.crc2.fill();
            L09_2_LuftfahrtClasses.crc2.beginPath();
            L09_2_LuftfahrtClasses.crc2.ellipse(0, 0, 2, 5, this.rotation, 0, 2 * Math.PI, true);
            L09_2_LuftfahrtClasses.crc2.closePath();
            L09_2_LuftfahrtClasses.crc2.strokeStyle = "black";
            L09_2_LuftfahrtClasses.crc2.stroke();
            L09_2_LuftfahrtClasses.crc2.restore();
        }
        move(_timeslice) {
            let offset = new L09_2_LuftfahrtClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_2_LuftfahrtClasses.crc2.canvas.width;
            if (this.position.x > L09_2_LuftfahrtClasses.crc2.canvas.width)
                this.position.x -= L09_2_LuftfahrtClasses.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_2_LuftfahrtClasses.crc2.canvas.height;
            if (this.position.y > L09_2_LuftfahrtClasses.crc2.canvas.height)
                this.position.y -= L09_2_LuftfahrtClasses.crc2.canvas.height;
        }
    }
    L09_2_LuftfahrtClasses.Fly = Fly;
})(L09_2_LuftfahrtClasses || (L09_2_LuftfahrtClasses = {}));
//# sourceMappingURL=Fly.js.map