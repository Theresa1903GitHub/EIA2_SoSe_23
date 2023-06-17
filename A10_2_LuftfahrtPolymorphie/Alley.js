"use strict";
var L10_2_LuftfahrtPolymorphie;
(function (L10_2_LuftfahrtPolymorphie) {
    /*
    Aufgabe: 08_2_Luftfahrt
    Name: Theresa Hauser
    Matrikel: 272983
    Datum: 17.06.23
    Zusammenarbeit mit Pia Schwer, Marie Eckl
    Quellen: Inverted Classroom Jirka
    */
    window.addEventListener("load", handleLoad);
    let background;
    // let paraglider: Paraglider[] = [];
    // let clouds: Cloud[] = [];
    // let flies: Fly[] = [];
    let moveables = [];
    L10_2_LuftfahrtPolymorphie.golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L10_2_LuftfahrtPolymorphie.crc2 = canvas.getContext("2d");
        drawBackground();
        create();
        setInterval(update, 20);
    }
    function create() {
        for (let index = 0; index < 2; index++) {
            let randomX = Math.random() * L10_2_LuftfahrtPolymorphie.crc2.canvas.width;
            let cloud = new L10_2_LuftfahrtPolymorphie.Cloud(randomX, 100);
            moveables.push(cloud);
        }
        ;
        for (let index = 0; index < 10; index++) {
            let paraglider = new L10_2_LuftfahrtPolymorphie.Paraglider();
            moveables.push(paraglider);
        }
        ;
        for (let index = 0; index < 10; index++) {
            let randomRotation = Math.random() * 360;
            let fly = new L10_2_LuftfahrtPolymorphie.Fly(randomRotation);
            moveables.push(fly);
        }
        ;
    }
    ;
    // let x: number = (Math.random() - 0.5) * 200;
    // let y: number = - (Math.random() * 50);  
    // let rdm1: number = Math.random()*80 + 20;
    // let rdm2: number = Math.random()*20; 
    function update() {
        L10_2_LuftfahrtPolymorphie.crc2.putImageData(background, 0, 0);
        // for (let cloud of clouds){
        //     cloud.draw(x, y);
        //     cloud.draw(x+0.5*rdm1, rdm2)
        //     cloud.draw(x + rdm1, y);
        //     cloud.draw(x + 1.5*rdm1, y - rdm2);
        //     cloud.draw(x+ 2*rdm1, y + rdm2)
        //     cloud.move(1/800);
        //     console.log("cloud");    
        // }
        for (let moveable of moveables) {
            // if (moveable: Cloud){
            //     moveable.draw(x, y);
            // moveable.draw(x+0.5*rdm1, rdm2)
            // moveable.draw(x + rdm1, y);
            // moveable.draw(x + 1.5*rdm1, y - rdm2);
            // moveable.draw(x+ 2*rdm1, y + rdm2)
            // moveable.move(1/800);
            // console.log("cloud");  
            // }
            moveable.draw();
            moveable.move(1 / 60);
        }
    }
    ;
    function drawBackground() {
        let gradient = L10_2_LuftfahrtPolymorphie.crc2.createLinearGradient(0, 0, 0, L10_2_LuftfahrtPolymorphie.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L10_2_LuftfahrtPolymorphie.golden - 0.01, "white");
        gradient.addColorStop(L10_2_LuftfahrtPolymorphie.golden, "HSL(100, 60%, 50%)");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        L10_2_LuftfahrtPolymorphie.crc2.fillStyle = gradient;
        L10_2_LuftfahrtPolymorphie.crc2.fillRect(0, 0, L10_2_LuftfahrtPolymorphie.crc2.canvas.width, L10_2_LuftfahrtPolymorphie.crc2.canvas.height);
        drawSun({ x: 100, y: 75 });
        let horizon = L10_2_LuftfahrtPolymorphie.crc2.canvas.height * L10_2_LuftfahrtPolymorphie.golden;
        let posMountains = { x: 0, y: horizon };
        let posMountain = { x: 0, y: horizon + 30 };
        drawMountains(posMountains, 75, 160, "grey", "white");
        for (let x = 0; x < 25; x++) {
            let randomX = Math.random() * L10_2_LuftfahrtPolymorphie.crc2.canvas.width;
            let randomY = (Math.random() * L10_2_LuftfahrtPolymorphie.crc2.canvas.height) - (1 - (L10_2_LuftfahrtPolymorphie.crc2.canvas.height * L10_2_LuftfahrtPolymorphie.golden));
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
        background = L10_2_LuftfahrtPolymorphie.crc2.getImageData(0, 0, L10_2_LuftfahrtPolymorphie.crc2.canvas.width, L10_2_LuftfahrtPolymorphie.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 100;
        let gradient = L10_2_LuftfahrtPolymorphie.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
        gradient.addColorStop(0.5, "hsla(60, 100%, 62%, 0.5)");
        gradient.addColorStop(1, "hsla(60, 100%, 62%, 0)");
        L10_2_LuftfahrtPolymorphie.crc2.save();
        L10_2_LuftfahrtPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2_LuftfahrtPolymorphie.crc2.fillStyle = gradient;
        L10_2_LuftfahrtPolymorphie.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_2_LuftfahrtPolymorphie.crc2.fill();
        L10_2_LuftfahrtPolymorphie.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 30;
        let stepMax = 100;
        let x = 0;
        L10_2_LuftfahrtPolymorphie.crc2.save();
        L10_2_LuftfahrtPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2_LuftfahrtPolymorphie.crc2.beginPath();
        L10_2_LuftfahrtPolymorphie.crc2.moveTo(0, 0);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10_2_LuftfahrtPolymorphie.crc2.lineTo(x, y);
        } while (x < L10_2_LuftfahrtPolymorphie.crc2.canvas.width);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(x, 0);
        L10_2_LuftfahrtPolymorphie.crc2.closePath();
        let gradient = L10_2_LuftfahrtPolymorphie.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.75, _colorHigh);
        L10_2_LuftfahrtPolymorphie.crc2.fillStyle = gradient;
        L10_2_LuftfahrtPolymorphie.crc2.fill();
        L10_2_LuftfahrtPolymorphie.crc2.restore();
    }
    ;
    function drawMountain(_position, _height, _width, _colorLow, _colorHigh) {
        L10_2_LuftfahrtPolymorphie.crc2.save();
        L10_2_LuftfahrtPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2_LuftfahrtPolymorphie.crc2.beginPath();
        L10_2_LuftfahrtPolymorphie.crc2.moveTo(0, 0);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(0, -_height);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(_width, 0);
        L10_2_LuftfahrtPolymorphie.crc2.closePath();
        let gradient = L10_2_LuftfahrtPolymorphie.crc2.createLinearGradient(0, 0, 0, -_height);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L10_2_LuftfahrtPolymorphie.crc2.fillStyle = gradient;
        L10_2_LuftfahrtPolymorphie.crc2.fill();
        L10_2_LuftfahrtPolymorphie.crc2.restore();
    }
    ;
    function drawGras(_position) {
        let size = _position.y * _position.y * 0.00008;
        L10_2_LuftfahrtPolymorphie.crc2.save();
        L10_2_LuftfahrtPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2_LuftfahrtPolymorphie.crc2.beginPath();
        L10_2_LuftfahrtPolymorphie.crc2.moveTo(0, 0);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(0, -size);
        L10_2_LuftfahrtPolymorphie.crc2.moveTo(0, 0);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(-(size / 4), -(size / 4) * 3);
        L10_2_LuftfahrtPolymorphie.crc2.moveTo(0, 0);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(size / 4, -(size / 4) * 3);
        L10_2_LuftfahrtPolymorphie.crc2.closePath();
        L10_2_LuftfahrtPolymorphie.crc2.strokeStyle = "darkgreen";
        L10_2_LuftfahrtPolymorphie.crc2.stroke();
        L10_2_LuftfahrtPolymorphie.crc2.restore();
    }
    ;
    function drawPlace(_position) {
        let r1 = 30;
        let r2 = 100;
        let gradient = L10_2_LuftfahrtPolymorphie.crc2.createLinearGradient(0, 0, 0, r2);
        gradient.addColorStop(0, "hsla(89, 100%, 45%, 1)");
        gradient.addColorStop(0.6, "hsla(80, 100%, 35%, 1)");
        L10_2_LuftfahrtPolymorphie.crc2.save();
        L10_2_LuftfahrtPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2_LuftfahrtPolymorphie.crc2.beginPath();
        L10_2_LuftfahrtPolymorphie.crc2.ellipse(0, 0, r1, r2, 0.5 * Math.PI, 0, 2 * Math.PI, true);
        L10_2_LuftfahrtPolymorphie.crc2.closePath();
        L10_2_LuftfahrtPolymorphie.crc2.fillStyle = gradient;
        L10_2_LuftfahrtPolymorphie.crc2.fill();
        L10_2_LuftfahrtPolymorphie.crc2.restore();
    }
    ;
    function drawTree(_position) {
        L10_2_LuftfahrtPolymorphie.crc2.save();
        L10_2_LuftfahrtPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2_LuftfahrtPolymorphie.crc2.beginPath();
        L10_2_LuftfahrtPolymorphie.crc2.rect(0, 0, 10, 15);
        L10_2_LuftfahrtPolymorphie.crc2.fillStyle = "brown";
        L10_2_LuftfahrtPolymorphie.crc2.closePath();
        L10_2_LuftfahrtPolymorphie.crc2.fill();
        L10_2_LuftfahrtPolymorphie.crc2.beginPath();
        L10_2_LuftfahrtPolymorphie.crc2.moveTo(0, 0);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(-30, 0);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(0, -15);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(-25, -15);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(0, -30);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(-20, -30);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(5, -45);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(30, -30);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(10, -30);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(35, -15);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(10, -15);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(40, 0);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(10, 0);
        L10_2_LuftfahrtPolymorphie.crc2.fillStyle = "darkgreen";
        L10_2_LuftfahrtPolymorphie.crc2.closePath();
        L10_2_LuftfahrtPolymorphie.crc2.fill();
        L10_2_LuftfahrtPolymorphie.crc2.restore();
    }
    ;
    function drawKiosk(_position) {
        L10_2_LuftfahrtPolymorphie.crc2.save();
        L10_2_LuftfahrtPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2_LuftfahrtPolymorphie.crc2.beginPath();
        L10_2_LuftfahrtPolymorphie.crc2.moveTo(0, -50);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(0, 0);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(50, 0);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(50, -40);
        L10_2_LuftfahrtPolymorphie.crc2.closePath();
        L10_2_LuftfahrtPolymorphie.crc2.fillStyle = "white";
        L10_2_LuftfahrtPolymorphie.crc2.fill();
        L10_2_LuftfahrtPolymorphie.crc2.beginPath();
        L10_2_LuftfahrtPolymorphie.crc2.moveTo(50, -40);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(-10, -53);
        L10_2_LuftfahrtPolymorphie.crc2.closePath();
        L10_2_LuftfahrtPolymorphie.crc2.strokeStyle = "red";
        L10_2_LuftfahrtPolymorphie.crc2.lineWidth = 4;
        L10_2_LuftfahrtPolymorphie.crc2.stroke();
        L10_2_LuftfahrtPolymorphie.crc2.restore();
    }
    ;
    function drawWindsock(_position) {
        L10_2_LuftfahrtPolymorphie.crc2.save();
        L10_2_LuftfahrtPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2_LuftfahrtPolymorphie.crc2.beginPath();
        L10_2_LuftfahrtPolymorphie.crc2.bezierCurveTo(45, -40, 35, -60, 0, -60);
        // crc2.moveTo(_position.x, _position.y-60);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(0, -40);
        // crc2.lineTo(_position.x+45, _position.y+10);
        // crc2.moveTo(_position.x+45, _position.y+10);
        L10_2_LuftfahrtPolymorphie.crc2.bezierCurveTo(0, -50, 50, -30, 45, -25);
        L10_2_LuftfahrtPolymorphie.crc2.closePath();
        L10_2_LuftfahrtPolymorphie.crc2.fillStyle = "red";
        L10_2_LuftfahrtPolymorphie.crc2.fill();
        L10_2_LuftfahrtPolymorphie.crc2.beginPath();
        L10_2_LuftfahrtPolymorphie.crc2.moveTo(0, 0);
        L10_2_LuftfahrtPolymorphie.crc2.lineTo(0, -60);
        L10_2_LuftfahrtPolymorphie.crc2.closePath();
        L10_2_LuftfahrtPolymorphie.crc2.strokeStyle = "black";
        L10_2_LuftfahrtPolymorphie.crc2.stroke();
        L10_2_LuftfahrtPolymorphie.crc2.restore();
    }
    ;
})(L10_2_LuftfahrtPolymorphie || (L10_2_LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Alley.js.map