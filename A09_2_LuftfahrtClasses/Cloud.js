"use strict";
var L09_2_LuftfahrtClasses;
(function (L09_2_LuftfahrtClasses) {
    class Cloud {
        position;
        velocity;
        constructor(_positionX, _positionY) {
            this.position = new L09_2_LuftfahrtClasses.Vector(_positionX, _positionY);
            this.velocity = new L09_2_LuftfahrtClasses.Vector(500, 0);
        }
        draw(_x, _y) {
            let nParticles = 1;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = L09_2_LuftfahrtClasses.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "hsla(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
            L09_2_LuftfahrtClasses.crc2.save();
            L09_2_LuftfahrtClasses.crc2.translate(this.position.x, this.position.y);
            L09_2_LuftfahrtClasses.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_2_LuftfahrtClasses.crc2.save();
                L09_2_LuftfahrtClasses.crc2.translate(_x, _y);
                L09_2_LuftfahrtClasses.crc2.fill(particle);
                L09_2_LuftfahrtClasses.crc2.restore();
            }
            L09_2_LuftfahrtClasses.crc2.restore();
        }
        move(_timeslice) {
            console.log("moving cloud");
            let offset = new L09_2_LuftfahrtClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_2_LuftfahrtClasses.crc2.canvas.width;
            if (this.position.x > L09_2_LuftfahrtClasses.crc2.canvas.width)
                this.position.x -= L09_2_LuftfahrtClasses.crc2.canvas.width;
        }
    }
    L09_2_LuftfahrtClasses.Cloud = Cloud;
})(L09_2_LuftfahrtClasses || (L09_2_LuftfahrtClasses = {}));
//# sourceMappingURL=Cloud.js.map