"use strict";
var L10_2_LuftfahrtPolymorphie;
(function (L10_2_LuftfahrtPolymorphie) {
    class Moveable {
        position;
        velocity;
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        move(_timeslice) {
            let offset = new L10_2_LuftfahrtPolymorphie.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_2_LuftfahrtPolymorphie.crc2.canvas.width;
            if (this.position.x > L10_2_LuftfahrtPolymorphie.crc2.canvas.width)
                this.position.x -= L10_2_LuftfahrtPolymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_2_LuftfahrtPolymorphie.crc2.canvas.height;
            if (this.position.y > L10_2_LuftfahrtPolymorphie.crc2.canvas.height)
                this.position.y -= L10_2_LuftfahrtPolymorphie.crc2.canvas.height;
        }
        draw(_x, _y) {
        }
    }
    L10_2_LuftfahrtPolymorphie.Moveable = Moveable;
})(L10_2_LuftfahrtPolymorphie || (L10_2_LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Moveable.js.map