"use strict";
var L11_LuftfahrtInteraktiv;
(function (L11_LuftfahrtInteraktiv) {
    /*
    Aufgabe: 11_LuftfahrtInteraktiv
    Name: Theresa Hauser
    Matrikel: 272983
    Datum: 24.06.23
    Zusammenarbeit mit Pia Schwer, Marie Eckl
    Quellen: Inverted Classroom Jirka, Aufgaben aus EIA1
    */
    window.addEventListener("load", handleLoad);
    window.addEventListener("keydown", handleKeyevent);
    window.addEventListener("click", handleClickevent);
    let background;
    let moveables = [];
    L11_LuftfahrtInteraktiv.direction = true;
    L11_LuftfahrtInteraktiv.strength = 1;
    L11_LuftfahrtInteraktiv.golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L11_LuftfahrtInteraktiv.crc2 = canvas.getContext("2d");
        drawBackground();
        create();
        setInterval(update, 20);
    }
    function create() {
        for (let index = 0; index < 2; index++) {
            let randomX = Math.random() * L11_LuftfahrtInteraktiv.crc2.canvas.width;
            let cloud = new L11_LuftfahrtInteraktiv.Cloud(randomX, 100);
            moveables.push(cloud);
        }
        ;
        for (let index = 0; index < 10; index++) {
            let paraglider = new L11_LuftfahrtInteraktiv.Paraglider();
            moveables.push(paraglider);
        }
        ;
        for (let index = 0; index < 10; index++) {
            let randomRotation = Math.random() * 360;
            let fly = new L11_LuftfahrtInteraktiv.Fly(randomRotation);
            moveables.push(fly);
        }
        ;
    }
    ;
    function update() {
        L11_LuftfahrtInteraktiv.crc2.putImageData(background, 0, 0);
        drawWindsock({ x: 370, y: 380 });
        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1 / 60);
        }
    }
    ;
    function handleKeyevent(_event) {
        // up keyCode == 38
        if (_event.keyCode == 38) {
            L11_LuftfahrtInteraktiv.strength += 1;
            // for (let moveable of moveables) {
            // moveable.velocity.scaleX(2)}
        }
        // down keyCode == 40
        if (_event.keyCode == 40) {
            // for (let moveable of moveables) {
            // moveable.velocity.scaleX(1/2)}
            if (L11_LuftfahrtInteraktiv.strength >= 0)
                L11_LuftfahrtInteraktiv.strength -= 1;
        }
        // left keyCode == 37
        if (_event.keyCode == 37) {
            for (let moveable of moveables) {
                if (moveable.velocity.x >= 0)
                    moveable.velocity.mirror();
            }
            L11_LuftfahrtInteraktiv.direction = false;
        }
        // right keyCode == 39
        if (_event.keyCode == 39) {
            for (let moveable of moveables) {
                if (moveable.velocity.x <= 0)
                    moveable.velocity.mirror();
            }
            L11_LuftfahrtInteraktiv.direction = true;
            console.log(L11_LuftfahrtInteraktiv.direction);
        }
    }
    ;
    function handleClickevent(_event) {
        let hotspot = new L11_LuftfahrtInteraktiv.Vector(_event.clientX - L11_LuftfahrtInteraktiv.crc2.canvas.offsetLeft, _event.clientY - L11_LuftfahrtInteraktiv.crc2.canvas.offsetTop);
        let paragliderHit = changeParaglider(hotspot);
        if (paragliderHit)
            changeColor(paragliderHit);
    }
    function changeParaglider(_hotspot) {
        for (let moveable of moveables) {
            if (moveable instanceof L11_LuftfahrtInteraktiv.Paraglider && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function changeColor(_paraglider) {
        let h = Math.random() * 360;
        let s = Math.random() * 100;
        let l = Math.random() * 100;
        _paraglider.color = "hsl(" + h + "," + s + "% , " + l + "%)";
    }
    function drawBackground() {
        let gradient = L11_LuftfahrtInteraktiv.crc2.createLinearGradient(0, 0, 0, L11_LuftfahrtInteraktiv.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L11_LuftfahrtInteraktiv.golden - 0.01, "white");
        gradient.addColorStop(L11_LuftfahrtInteraktiv.golden, "HSL(100, 60%, 50%)");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        L11_LuftfahrtInteraktiv.crc2.fillStyle = gradient;
        L11_LuftfahrtInteraktiv.crc2.fillRect(0, 0, L11_LuftfahrtInteraktiv.crc2.canvas.width, L11_LuftfahrtInteraktiv.crc2.canvas.height);
        drawSun({ x: 100, y: 75 });
        let horizon = L11_LuftfahrtInteraktiv.crc2.canvas.height * L11_LuftfahrtInteraktiv.golden;
        let posMountains = { x: 0, y: horizon };
        let posMountain = { x: 0, y: horizon + 30 };
        drawMountains(posMountains, 75, 160, "grey", "white");
        for (let x = 0; x < 25; x++) {
            let randomX = Math.random() * L11_LuftfahrtInteraktiv.crc2.canvas.width;
            let randomY = (Math.random() * L11_LuftfahrtInteraktiv.crc2.canvas.height) - (1 - (L11_LuftfahrtInteraktiv.crc2.canvas.height * L11_LuftfahrtInteraktiv.golden));
            drawGras({ x: randomX, y: randomY });
        }
        ;
        drawMountain(posMountain, 200, 270, "grey", "darkgrey");
        drawPlace({ x: 500, y: 300 });
        drawTree({ x: 100, y: 280 });
        drawTree({ x: 70, y: 290 });
        drawTree({ x: 40, y: 285 });
        drawKiosk({ x: 780, y: 350 });
        // drawWindsock({x: 370, y: 380});
        background = L11_LuftfahrtInteraktiv.crc2.getImageData(0, 0, L11_LuftfahrtInteraktiv.crc2.canvas.width, L11_LuftfahrtInteraktiv.crc2.canvas.height);
    }
    ;
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 100;
        let gradient = L11_LuftfahrtInteraktiv.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
        gradient.addColorStop(0.5, "hsla(60, 100%, 62%, 0.5)");
        gradient.addColorStop(1, "hsla(60, 100%, 62%, 0)");
        L11_LuftfahrtInteraktiv.crc2.save();
        L11_LuftfahrtInteraktiv.crc2.translate(_position.x, _position.y);
        L11_LuftfahrtInteraktiv.crc2.fillStyle = gradient;
        L11_LuftfahrtInteraktiv.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_LuftfahrtInteraktiv.crc2.fill();
        L11_LuftfahrtInteraktiv.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 30;
        let stepMax = 100;
        let x = 0;
        L11_LuftfahrtInteraktiv.crc2.save();
        L11_LuftfahrtInteraktiv.crc2.translate(_position.x, _position.y);
        L11_LuftfahrtInteraktiv.crc2.beginPath();
        L11_LuftfahrtInteraktiv.crc2.moveTo(0, 0);
        L11_LuftfahrtInteraktiv.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11_LuftfahrtInteraktiv.crc2.lineTo(x, y);
        } while (x < L11_LuftfahrtInteraktiv.crc2.canvas.width);
        L11_LuftfahrtInteraktiv.crc2.lineTo(x, 0);
        L11_LuftfahrtInteraktiv.crc2.closePath();
        let gradient = L11_LuftfahrtInteraktiv.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.75, _colorHigh);
        L11_LuftfahrtInteraktiv.crc2.fillStyle = gradient;
        L11_LuftfahrtInteraktiv.crc2.fill();
        L11_LuftfahrtInteraktiv.crc2.restore();
    }
    ;
    function drawMountain(_position, _height, _width, _colorLow, _colorHigh) {
        L11_LuftfahrtInteraktiv.crc2.save();
        L11_LuftfahrtInteraktiv.crc2.translate(_position.x, _position.y);
        L11_LuftfahrtInteraktiv.crc2.beginPath();
        L11_LuftfahrtInteraktiv.crc2.moveTo(0, 0);
        L11_LuftfahrtInteraktiv.crc2.lineTo(0, -_height);
        L11_LuftfahrtInteraktiv.crc2.lineTo(_width, 0);
        L11_LuftfahrtInteraktiv.crc2.closePath();
        let gradient = L11_LuftfahrtInteraktiv.crc2.createLinearGradient(0, 0, 0, -_height);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L11_LuftfahrtInteraktiv.crc2.fillStyle = gradient;
        L11_LuftfahrtInteraktiv.crc2.fill();
        L11_LuftfahrtInteraktiv.crc2.restore();
    }
    ;
    function drawGras(_position) {
        let size = _position.y * _position.y * 0.00008;
        L11_LuftfahrtInteraktiv.crc2.save();
        L11_LuftfahrtInteraktiv.crc2.translate(_position.x, _position.y);
        L11_LuftfahrtInteraktiv.crc2.beginPath();
        L11_LuftfahrtInteraktiv.crc2.moveTo(0, 0);
        L11_LuftfahrtInteraktiv.crc2.lineTo(0, -size);
        L11_LuftfahrtInteraktiv.crc2.moveTo(0, 0);
        L11_LuftfahrtInteraktiv.crc2.lineTo(-(size / 4), -(size / 4) * 3);
        L11_LuftfahrtInteraktiv.crc2.moveTo(0, 0);
        L11_LuftfahrtInteraktiv.crc2.lineTo(size / 4, -(size / 4) * 3);
        L11_LuftfahrtInteraktiv.crc2.closePath();
        L11_LuftfahrtInteraktiv.crc2.strokeStyle = "darkgreen";
        L11_LuftfahrtInteraktiv.crc2.stroke();
        L11_LuftfahrtInteraktiv.crc2.restore();
    }
    ;
    function drawPlace(_position) {
        let r1 = 30;
        let r2 = 100;
        let gradient = L11_LuftfahrtInteraktiv.crc2.createLinearGradient(0, 0, 0, r2);
        gradient.addColorStop(0, "hsla(89, 100%, 45%, 1)");
        gradient.addColorStop(0.6, "hsla(80, 100%, 35%, 1)");
        L11_LuftfahrtInteraktiv.crc2.save();
        L11_LuftfahrtInteraktiv.crc2.translate(_position.x, _position.y);
        L11_LuftfahrtInteraktiv.crc2.beginPath();
        L11_LuftfahrtInteraktiv.crc2.ellipse(0, 0, r1, r2, 0.5 * Math.PI, 0, 2 * Math.PI, true);
        L11_LuftfahrtInteraktiv.crc2.closePath();
        L11_LuftfahrtInteraktiv.crc2.fillStyle = gradient;
        L11_LuftfahrtInteraktiv.crc2.fill();
        L11_LuftfahrtInteraktiv.crc2.restore();
    }
    ;
    function drawTree(_position) {
        L11_LuftfahrtInteraktiv.crc2.save();
        L11_LuftfahrtInteraktiv.crc2.translate(_position.x, _position.y);
        L11_LuftfahrtInteraktiv.crc2.beginPath();
        L11_LuftfahrtInteraktiv.crc2.rect(0, 0, 10, 15);
        L11_LuftfahrtInteraktiv.crc2.fillStyle = "brown";
        L11_LuftfahrtInteraktiv.crc2.closePath();
        L11_LuftfahrtInteraktiv.crc2.fill();
        L11_LuftfahrtInteraktiv.crc2.beginPath();
        L11_LuftfahrtInteraktiv.crc2.moveTo(0, 0);
        L11_LuftfahrtInteraktiv.crc2.lineTo(-30, 0);
        L11_LuftfahrtInteraktiv.crc2.lineTo(0, -15);
        L11_LuftfahrtInteraktiv.crc2.lineTo(-25, -15);
        L11_LuftfahrtInteraktiv.crc2.lineTo(0, -30);
        L11_LuftfahrtInteraktiv.crc2.lineTo(-20, -30);
        L11_LuftfahrtInteraktiv.crc2.lineTo(5, -45);
        L11_LuftfahrtInteraktiv.crc2.lineTo(30, -30);
        L11_LuftfahrtInteraktiv.crc2.lineTo(10, -30);
        L11_LuftfahrtInteraktiv.crc2.lineTo(35, -15);
        L11_LuftfahrtInteraktiv.crc2.lineTo(10, -15);
        L11_LuftfahrtInteraktiv.crc2.lineTo(40, 0);
        L11_LuftfahrtInteraktiv.crc2.lineTo(10, 0);
        L11_LuftfahrtInteraktiv.crc2.fillStyle = "darkgreen";
        L11_LuftfahrtInteraktiv.crc2.closePath();
        L11_LuftfahrtInteraktiv.crc2.fill();
        L11_LuftfahrtInteraktiv.crc2.restore();
    }
    ;
    function drawKiosk(_position) {
        L11_LuftfahrtInteraktiv.crc2.save();
        L11_LuftfahrtInteraktiv.crc2.translate(_position.x, _position.y);
        L11_LuftfahrtInteraktiv.crc2.beginPath();
        L11_LuftfahrtInteraktiv.crc2.moveTo(0, -50);
        L11_LuftfahrtInteraktiv.crc2.lineTo(0, 0);
        L11_LuftfahrtInteraktiv.crc2.lineTo(50, 0);
        L11_LuftfahrtInteraktiv.crc2.lineTo(50, -40);
        L11_LuftfahrtInteraktiv.crc2.closePath();
        L11_LuftfahrtInteraktiv.crc2.fillStyle = "white";
        L11_LuftfahrtInteraktiv.crc2.fill();
        L11_LuftfahrtInteraktiv.crc2.beginPath();
        L11_LuftfahrtInteraktiv.crc2.moveTo(50, -40);
        L11_LuftfahrtInteraktiv.crc2.lineTo(-10, -53);
        L11_LuftfahrtInteraktiv.crc2.closePath();
        L11_LuftfahrtInteraktiv.crc2.strokeStyle = "red";
        L11_LuftfahrtInteraktiv.crc2.lineWidth = 4;
        L11_LuftfahrtInteraktiv.crc2.stroke();
        L11_LuftfahrtInteraktiv.crc2.restore();
    }
    ;
    function drawWindsock(_position) {
        L11_LuftfahrtInteraktiv.crc2.save();
        L11_LuftfahrtInteraktiv.crc2.translate(_position.x, _position.y);
        if (L11_LuftfahrtInteraktiv.direction == true) {
            L11_LuftfahrtInteraktiv.crc2.beginPath();
            L11_LuftfahrtInteraktiv.crc2.bezierCurveTo(45, -40, 35, -60, 0, -60);
            // crc2.moveTo(_position.x, _position.y-60);
            L11_LuftfahrtInteraktiv.crc2.lineTo(0, -40);
            // crc2.lineTo(_position.x+45, _position.y+10);
            // crc2.moveTo(_position.x+45, _position.y+10);
            L11_LuftfahrtInteraktiv.crc2.bezierCurveTo(0, -50, 50, -30, 45, -25);
            L11_LuftfahrtInteraktiv.crc2.closePath();
            L11_LuftfahrtInteraktiv.crc2.fillStyle = "red";
            L11_LuftfahrtInteraktiv.crc2.fill();
            L11_LuftfahrtInteraktiv.crc2.beginPath();
            L11_LuftfahrtInteraktiv.crc2.moveTo(0, 0);
            L11_LuftfahrtInteraktiv.crc2.lineTo(0, -60);
            L11_LuftfahrtInteraktiv.crc2.closePath();
            L11_LuftfahrtInteraktiv.crc2.strokeStyle = "black";
            L11_LuftfahrtInteraktiv.crc2.stroke();
            L11_LuftfahrtInteraktiv.crc2.restore();
        }
        else {
            L11_LuftfahrtInteraktiv.crc2.beginPath();
            L11_LuftfahrtInteraktiv.crc2.bezierCurveTo(-45, -40, -35, -60, 0, -60);
            // crc2.moveTo(_position.x, _position.y-60);
            L11_LuftfahrtInteraktiv.crc2.lineTo(0, -40);
            // crc2.lineTo(_position.x+45, _position.y+10);
            // crc2.moveTo(_position.x+45, _position.y+10);
            L11_LuftfahrtInteraktiv.crc2.bezierCurveTo(0, -50, -50, -30, -45, -25);
            L11_LuftfahrtInteraktiv.crc2.closePath();
            L11_LuftfahrtInteraktiv.crc2.fillStyle = "red";
            L11_LuftfahrtInteraktiv.crc2.fill();
            L11_LuftfahrtInteraktiv.crc2.beginPath();
            L11_LuftfahrtInteraktiv.crc2.moveTo(0, 0);
            L11_LuftfahrtInteraktiv.crc2.lineTo(0, -60);
            L11_LuftfahrtInteraktiv.crc2.closePath();
            L11_LuftfahrtInteraktiv.crc2.strokeStyle = "black";
            L11_LuftfahrtInteraktiv.crc2.stroke();
            L11_LuftfahrtInteraktiv.crc2.restore();
        }
    }
    ;
})(L11_LuftfahrtInteraktiv || (L11_LuftfahrtInteraktiv = {}));
//# sourceMappingURL=Alley.js.map