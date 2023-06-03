"use strict";
var L09_2_LuftfahrtClasses;
(function (L09_2_LuftfahrtClasses) {
    /*
    Aufgabe: 08_2_Luftfahrt
    Name: Theresa Hauser
    Matrikel: 272983
    Datum: 03.06.23
    Zusammenarbeit mit Pia Schwer, Marie Eckl
    Quellen: Inverted Classroom Jirka
    */
    window.addEventListener("load", handleLoad);
    let background;
    let paraglider = [];
    let clouds = [];
    let flies = [];
    L09_2_LuftfahrtClasses.golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L09_2_LuftfahrtClasses.crc2 = canvas.getContext("2d");
        drawBackground();
        create();
        setInterval(update, 20);
    }
    function create() {
        for (let index = 0; index < 2; index++) {
            let randomX = Math.random() * L09_2_LuftfahrtClasses.crc2.canvas.width;
            let cloud = new L09_2_LuftfahrtClasses.Cloud(randomX, 100);
            clouds.push(cloud);
        }
        ;
        for (let index = 0; index < 10; index++) {
            let paraglidePerson = new L09_2_LuftfahrtClasses.Paraglider();
            paraglider.push(paraglidePerson);
        }
        ;
        for (let index = 0; index < 10; index++) {
            let randomRotation = Math.random() * 360;
            let fly = new L09_2_LuftfahrtClasses.Fly(randomRotation);
            flies.push(fly);
        }
        ;
    }
    ;
    let x = (Math.random() - 0.5) * 200;
    let y = -(Math.random() * 50);
    let rdm1 = Math.random() * 80 + 20;
    let rdm2 = Math.random() * 20;
    function update() {
        L09_2_LuftfahrtClasses.crc2.putImageData(background, 0, 0);
        for (let cloud of clouds) {
            cloud.draw(x, y);
            cloud.draw(x + 0.5 * rdm1, rdm2);
            cloud.draw(x + rdm1, y);
            cloud.draw(x + 1.5 * rdm1, y - rdm2);
            cloud.draw(x + 2 * rdm1, y + rdm2);
            cloud.move(1 / 800);
            console.log("cloud");
        }
        for (let glider of paraglider) {
            glider.drawPerson();
            glider.fly(1 / 200);
            if (glider.activity == "fly") {
                glider.fly(1 / 200);
                glider.drawParaglider();
                console.log("fliegend");
            }
            if (glider.activity == "walk") {
                glider.drawPerson();
                glider.walk(1 / 200);
                console.log("laufend");
            }
            if (glider.activity == "climb") {
                glider.drawPerson();
                glider.climb(1 / 200);
                console.log("kletternd");
            }
        }
        for (let fly of flies) {
            fly.draw();
            fly.move(1 / 200);
        }
    }
    ;
    function drawBackground() {
        let gradient = L09_2_LuftfahrtClasses.crc2.createLinearGradient(0, 0, 0, L09_2_LuftfahrtClasses.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L09_2_LuftfahrtClasses.golden - 0.01, "white");
        gradient.addColorStop(L09_2_LuftfahrtClasses.golden, "HSL(100, 60%, 50%)");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        L09_2_LuftfahrtClasses.crc2.fillStyle = gradient;
        L09_2_LuftfahrtClasses.crc2.fillRect(0, 0, L09_2_LuftfahrtClasses.crc2.canvas.width, L09_2_LuftfahrtClasses.crc2.canvas.height);
        drawSun({ x: 100, y: 75 });
        let horizon = L09_2_LuftfahrtClasses.crc2.canvas.height * L09_2_LuftfahrtClasses.golden;
        let posMountains = { x: 0, y: horizon };
        let posMountain = { x: 0, y: horizon + 30 };
        drawMountains(posMountains, 75, 160, "grey", "white");
        for (let x = 0; x < 25; x++) {
            let randomX = Math.random() * L09_2_LuftfahrtClasses.crc2.canvas.width;
            let randomY = (Math.random() * L09_2_LuftfahrtClasses.crc2.canvas.height) - (1 - (L09_2_LuftfahrtClasses.crc2.canvas.height * L09_2_LuftfahrtClasses.golden));
            drawGras({ x: randomX, y: randomY });
        }
        ;
        drawMountain(posMountain, 200, 270, "grey", "darkgrey");
        drawPlace({ x: 500, y: 300 });
        drawTree({ x: 100, y: 280 });
        drawTree({ x: 70, y: 290 });
        drawTree({ x: 40, y: 285 });
        drawKiosk({ x: 780, y: 350 });
        drawWindsock({ x: 370, y: 380 });
        background = L09_2_LuftfahrtClasses.crc2.getImageData(0, 0, L09_2_LuftfahrtClasses.crc2.canvas.width, L09_2_LuftfahrtClasses.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 100;
        let gradient = L09_2_LuftfahrtClasses.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
        gradient.addColorStop(0.5, "hsla(60, 100%, 62%, 0.5)");
        gradient.addColorStop(1, "hsla(60, 100%, 62%, 0)");
        L09_2_LuftfahrtClasses.crc2.save();
        L09_2_LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        L09_2_LuftfahrtClasses.crc2.fillStyle = gradient;
        L09_2_LuftfahrtClasses.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_2_LuftfahrtClasses.crc2.fill();
        L09_2_LuftfahrtClasses.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 30;
        let stepMax = 100;
        let x = 0;
        L09_2_LuftfahrtClasses.crc2.save();
        L09_2_LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        L09_2_LuftfahrtClasses.crc2.beginPath();
        L09_2_LuftfahrtClasses.crc2.moveTo(0, 0);
        L09_2_LuftfahrtClasses.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_2_LuftfahrtClasses.crc2.lineTo(x, y);
        } while (x < L09_2_LuftfahrtClasses.crc2.canvas.width);
        L09_2_LuftfahrtClasses.crc2.lineTo(x, 0);
        L09_2_LuftfahrtClasses.crc2.closePath();
        let gradient = L09_2_LuftfahrtClasses.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.75, _colorHigh);
        L09_2_LuftfahrtClasses.crc2.fillStyle = gradient;
        L09_2_LuftfahrtClasses.crc2.fill();
        L09_2_LuftfahrtClasses.crc2.restore();
    }
    ;
    function drawMountain(_position, _height, _width, _colorLow, _colorHigh) {
        L09_2_LuftfahrtClasses.crc2.save();
        L09_2_LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        L09_2_LuftfahrtClasses.crc2.beginPath();
        L09_2_LuftfahrtClasses.crc2.moveTo(0, 0);
        L09_2_LuftfahrtClasses.crc2.lineTo(0, -_height);
        L09_2_LuftfahrtClasses.crc2.lineTo(_width, 0);
        L09_2_LuftfahrtClasses.crc2.closePath();
        let gradient = L09_2_LuftfahrtClasses.crc2.createLinearGradient(0, 0, 0, -_height);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09_2_LuftfahrtClasses.crc2.fillStyle = gradient;
        L09_2_LuftfahrtClasses.crc2.fill();
        L09_2_LuftfahrtClasses.crc2.restore();
    }
    ;
    function drawGras(_position) {
        let size = _position.y * _position.y * 0.00008;
        L09_2_LuftfahrtClasses.crc2.save();
        L09_2_LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        L09_2_LuftfahrtClasses.crc2.beginPath();
        L09_2_LuftfahrtClasses.crc2.moveTo(0, 0);
        L09_2_LuftfahrtClasses.crc2.lineTo(0, -size);
        L09_2_LuftfahrtClasses.crc2.moveTo(0, 0);
        L09_2_LuftfahrtClasses.crc2.lineTo(-(size / 4), -(size / 4) * 3);
        L09_2_LuftfahrtClasses.crc2.moveTo(0, 0);
        L09_2_LuftfahrtClasses.crc2.lineTo(size / 4, -(size / 4) * 3);
        L09_2_LuftfahrtClasses.crc2.closePath();
        L09_2_LuftfahrtClasses.crc2.strokeStyle = "darkgreen";
        L09_2_LuftfahrtClasses.crc2.stroke();
        L09_2_LuftfahrtClasses.crc2.restore();
    }
    ;
    function drawPlace(_position) {
        let r1 = 30;
        let r2 = 100;
        let gradient = L09_2_LuftfahrtClasses.crc2.createLinearGradient(0, 0, 0, r2);
        gradient.addColorStop(0, "hsla(89, 100%, 45%, 1)");
        gradient.addColorStop(0.6, "hsla(80, 100%, 35%, 1)");
        L09_2_LuftfahrtClasses.crc2.save();
        L09_2_LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        L09_2_LuftfahrtClasses.crc2.beginPath();
        L09_2_LuftfahrtClasses.crc2.ellipse(0, 0, r1, r2, 0.5 * Math.PI, 0, 2 * Math.PI, true);
        L09_2_LuftfahrtClasses.crc2.closePath();
        L09_2_LuftfahrtClasses.crc2.fillStyle = gradient;
        L09_2_LuftfahrtClasses.crc2.fill();
        L09_2_LuftfahrtClasses.crc2.restore();
    }
    ;
    function drawTree(_position) {
        L09_2_LuftfahrtClasses.crc2.save();
        L09_2_LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        L09_2_LuftfahrtClasses.crc2.beginPath();
        L09_2_LuftfahrtClasses.crc2.rect(0, 0, 10, 15);
        L09_2_LuftfahrtClasses.crc2.fillStyle = "brown";
        L09_2_LuftfahrtClasses.crc2.closePath();
        L09_2_LuftfahrtClasses.crc2.fill();
        L09_2_LuftfahrtClasses.crc2.beginPath();
        L09_2_LuftfahrtClasses.crc2.moveTo(0, 0);
        L09_2_LuftfahrtClasses.crc2.lineTo(-30, 0);
        L09_2_LuftfahrtClasses.crc2.lineTo(0, -15);
        L09_2_LuftfahrtClasses.crc2.lineTo(-25, -15);
        L09_2_LuftfahrtClasses.crc2.lineTo(0, -30);
        L09_2_LuftfahrtClasses.crc2.lineTo(-20, -30);
        L09_2_LuftfahrtClasses.crc2.lineTo(5, -45);
        L09_2_LuftfahrtClasses.crc2.lineTo(30, -30);
        L09_2_LuftfahrtClasses.crc2.lineTo(10, -30);
        L09_2_LuftfahrtClasses.crc2.lineTo(35, -15);
        L09_2_LuftfahrtClasses.crc2.lineTo(10, -15);
        L09_2_LuftfahrtClasses.crc2.lineTo(40, 0);
        L09_2_LuftfahrtClasses.crc2.lineTo(10, 0);
        L09_2_LuftfahrtClasses.crc2.fillStyle = "darkgreen";
        L09_2_LuftfahrtClasses.crc2.closePath();
        L09_2_LuftfahrtClasses.crc2.fill();
        L09_2_LuftfahrtClasses.crc2.restore();
    }
    ;
    function drawKiosk(_position) {
        L09_2_LuftfahrtClasses.crc2.save();
        L09_2_LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        L09_2_LuftfahrtClasses.crc2.beginPath();
        L09_2_LuftfahrtClasses.crc2.moveTo(0, -50);
        L09_2_LuftfahrtClasses.crc2.lineTo(0, 0);
        L09_2_LuftfahrtClasses.crc2.lineTo(50, 0);
        L09_2_LuftfahrtClasses.crc2.lineTo(50, -40);
        L09_2_LuftfahrtClasses.crc2.closePath();
        L09_2_LuftfahrtClasses.crc2.fillStyle = "white";
        L09_2_LuftfahrtClasses.crc2.fill();
        L09_2_LuftfahrtClasses.crc2.beginPath();
        L09_2_LuftfahrtClasses.crc2.moveTo(50, -40);
        L09_2_LuftfahrtClasses.crc2.lineTo(-10, -53);
        L09_2_LuftfahrtClasses.crc2.closePath();
        L09_2_LuftfahrtClasses.crc2.strokeStyle = "red";
        L09_2_LuftfahrtClasses.crc2.lineWidth = 4;
        L09_2_LuftfahrtClasses.crc2.stroke();
        L09_2_LuftfahrtClasses.crc2.restore();
    }
    ;
    function drawWindsock(_position) {
        L09_2_LuftfahrtClasses.crc2.save();
        L09_2_LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        L09_2_LuftfahrtClasses.crc2.beginPath();
        L09_2_LuftfahrtClasses.crc2.bezierCurveTo(45, -40, 35, -60, 0, -60);
        // crc2.moveTo(_position.x, _position.y-60);
        L09_2_LuftfahrtClasses.crc2.lineTo(0, -40);
        // crc2.lineTo(_position.x+45, _position.y+10);
        // crc2.moveTo(_position.x+45, _position.y+10);
        L09_2_LuftfahrtClasses.crc2.bezierCurveTo(0, -50, 50, -30, 45, -25);
        L09_2_LuftfahrtClasses.crc2.closePath();
        L09_2_LuftfahrtClasses.crc2.fillStyle = "red";
        L09_2_LuftfahrtClasses.crc2.fill();
        L09_2_LuftfahrtClasses.crc2.beginPath();
        L09_2_LuftfahrtClasses.crc2.moveTo(0, 0);
        L09_2_LuftfahrtClasses.crc2.lineTo(0, -60);
        L09_2_LuftfahrtClasses.crc2.closePath();
        L09_2_LuftfahrtClasses.crc2.strokeStyle = "black";
        L09_2_LuftfahrtClasses.crc2.stroke();
        L09_2_LuftfahrtClasses.crc2.restore();
    }
    ;
})(L09_2_LuftfahrtClasses || (L09_2_LuftfahrtClasses = {}));
//# sourceMappingURL=Alley.js.map