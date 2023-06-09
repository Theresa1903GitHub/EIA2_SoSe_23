"use strict";
var L09_2_LuftfahrtClasses;
(function (L09_2_LuftfahrtClasses) {
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
    L09_2_LuftfahrtClasses.Vector = Vector;
})(L09_2_LuftfahrtClasses || (L09_2_LuftfahrtClasses = {}));
//# sourceMappingURL=Vector.js.map