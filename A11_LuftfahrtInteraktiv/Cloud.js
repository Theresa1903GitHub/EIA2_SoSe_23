"use strict";
var L11_LuftfahrtInteraktiv;
(function (L11_LuftfahrtInteraktiv) {
    class Cloud extends L11_LuftfahrtInteraktiv.Moveable {
        constructor(_positionX, _positionY) {
            let position = new L11_LuftfahrtInteraktiv.Vector(_positionX, _positionY);
            let velocity = new L11_LuftfahrtInteraktiv.Vector(100, 0);
            super(position, velocity);
        }
        draw(_x, _y) {
            let nParticles = 1;
            let radiusParticle = 80;
            let particle = new Path2D();
            let gradient = L11_LuftfahrtInteraktiv.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "hsla(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
            L11_LuftfahrtInteraktiv.crc2.save();
            L11_LuftfahrtInteraktiv.crc2.translate(this.position.x, this.position.y);
            L11_LuftfahrtInteraktiv.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L11_LuftfahrtInteraktiv.crc2.save();
                L11_LuftfahrtInteraktiv.crc2.translate(_x, _y);
                L11_LuftfahrtInteraktiv.crc2.fill(particle);
                L11_LuftfahrtInteraktiv.crc2.restore();
            }
            L11_LuftfahrtInteraktiv.crc2.restore();
        }
    }
    L11_LuftfahrtInteraktiv.Cloud = Cloud;
})(L11_LuftfahrtInteraktiv || (L11_LuftfahrtInteraktiv = {}));
//# sourceMappingURL=Cloud.js.map