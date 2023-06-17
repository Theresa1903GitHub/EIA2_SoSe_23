"use strict";
var L10_2_LuftfahrtPolymorphie;
(function (L10_2_LuftfahrtPolymorphie) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    L10_2_LuftfahrtPolymorphie.Vector = Vector;
})(L10_2_LuftfahrtPolymorphie || (L10_2_LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Vector.js.map