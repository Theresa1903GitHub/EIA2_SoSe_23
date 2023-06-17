"use strict";
var L10_2_LuftfahrtPolymorphie;
(function (L10_2_LuftfahrtPolymorphie) {
    class Cloud extends L10_2_LuftfahrtPolymorphie.Moveable {
        constructor(_positionX, _positionY) {
            let position = new L10_2_LuftfahrtPolymorphie.Vector(_positionX, _positionY);
            let velocity = new L10_2_LuftfahrtPolymorphie.Vector(100, 0);
            super(position, velocity);
        }
        draw(_x, _y) {
            let nParticles = 1;
            let radiusParticle = 80;
            let particle = new Path2D();
            let gradient = L10_2_LuftfahrtPolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "hsla(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
            L10_2_LuftfahrtPolymorphie.crc2.save();
            L10_2_LuftfahrtPolymorphie.crc2.translate(this.position.x, this.position.y);
            L10_2_LuftfahrtPolymorphie.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_2_LuftfahrtPolymorphie.crc2.save();
                L10_2_LuftfahrtPolymorphie.crc2.translate(_x, _y);
                L10_2_LuftfahrtPolymorphie.crc2.fill(particle);
                L10_2_LuftfahrtPolymorphie.crc2.restore();
            }
            L10_2_LuftfahrtPolymorphie.crc2.restore();
        }
    }
    L10_2_LuftfahrtPolymorphie.Cloud = Cloud;
})(L10_2_LuftfahrtPolymorphie || (L10_2_LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Cloud.js.map