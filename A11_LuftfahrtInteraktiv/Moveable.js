"use strict";
var L11_LuftfahrtInteraktiv;
(function (L11_LuftfahrtInteraktiv) {
    class Moveable {
        position;
        velocity;
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        move(_timeslice, _strength) {
            let offset = new L11_LuftfahrtInteraktiv.Vector(this.velocity.x * L11_LuftfahrtInteraktiv.strength, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_LuftfahrtInteraktiv.crc2.canvas.width;
            if (this.position.x > L11_LuftfahrtInteraktiv.crc2.canvas.width)
                this.position.x -= L11_LuftfahrtInteraktiv.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_LuftfahrtInteraktiv.crc2.canvas.height;
            if (this.position.y > L11_LuftfahrtInteraktiv.crc2.canvas.height)
                this.position.y -= L11_LuftfahrtInteraktiv.crc2.canvas.height;
        }
        draw(_x, _y) {
        }
    }
    L11_LuftfahrtInteraktiv.Moveable = Moveable;
})(L11_LuftfahrtInteraktiv || (L11_LuftfahrtInteraktiv = {}));
//# sourceMappingURL=Moveable.js.map