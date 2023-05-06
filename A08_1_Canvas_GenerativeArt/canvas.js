"use strict";
var Canvas_GenerativeArt;
(function (Canvas_GenerativeArt) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let PositionX;
    let PositionY;
    let width;
    let height;
    let linelength1;
    let linelength2;
    let radius1;
    let radius2;
    let rotation;
    let h;
    let s;
    let l;
    let opacity;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        Background();
        let objectNumber = Math.floor(Math.random() * 25);
        for (let x = 0; x <= objectNumber; x++) {
            let geometry = Math.floor(Math.random() * 3);
            if (geometry === 0) {
                circle();
                console.log("circle");
            }
            if (geometry === 1) {
                ellipse();
                console.log("ellipse");
            }
            if (geometry === 2) {
                rectangle();
                console.log("rectangle");
            }
            else {
                triangle();
                console.log("triangle");
            }
        }
        ;
        document.addEventListener("click", ellipse);
    }
    ;
    function Background() {
        h = Math.random() * 360;
        s = Math.random() * 100;
        l = Math.random() * 100;
        let gradient = crc2.createLinearGradient(100, 0, 1500, 725);
        gradient.addColorStop(0, "hsl(" + h + ", " + s + "%, " + l + "%)");
        h = Math.random() * 360;
        s = Math.random() * 100;
        l = Math.random() * 100;
        gradient.addColorStop(1, "hsl(" + h + ", " + s + "%, " + l + "%)");
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();
    }
    ;
    function circle() {
        h = Math.random() * 360;
        s = Math.random() * 100;
        l = Math.random() * 100;
        opacity = Math.random();
        radius1 = Math.random() * 100;
        PositionX = Math.random() * innerWidth;
        PositionY = Math.random() * innerHeight;
        crc2.beginPath();
        crc2.arc(PositionX, PositionY, radius1, 0, 2 * Math.PI);
        crc2.fillStyle = "hsla(" + h + "," + s + "% , " + l + "%, " + opacity + ")";
        crc2.strokeStyle = "hsla(" + h + "," + s + "% , " + l + "%, " + opacity + ")";
        crc2.lineWidth = 3;
        crc2.closePath();
        let strokeOrFill = Math.floor(Math.random() * 2);
        if (strokeOrFill == 0) {
            crc2.fill();
        }
        else {
            crc2.stroke();
        }
        ;
    }
    ;
    function ellipse() {
        h = Math.random() * 360;
        s = Math.random() * 100;
        l = Math.random() * 100;
        opacity = Math.random();
        radius1 = Math.random() * 100;
        radius2 = Math.random() * 100;
        rotation = Math.random() * 2;
        PositionX = Math.random() * innerWidth;
        PositionY = Math.random() * innerHeight;
        crc2.beginPath();
        crc2.ellipse(PositionX, PositionY, radius1, radius2, rotation, 0, 2 * Math.PI);
        crc2.fillStyle = "hsla(" + h + "," + s + "% , " + l + "%, " + opacity + ")";
        crc2.strokeStyle = "hsla(" + h + "," + s + "% , " + l + "%, " + opacity + ")";
        crc2.lineWidth = 3;
        crc2.closePath();
        let strokeOrFill = Math.floor(Math.random() * 2);
        if (strokeOrFill == 0) {
            crc2.fill();
        }
        else {
            crc2.stroke();
        }
        ;
    }
    ;
    function rectangle() {
        h = Math.random() * 360;
        s = Math.random() * 100;
        l = Math.random() * 100;
        opacity = Math.random();
        rotation = Math.random() * 2;
        PositionX = Math.random() * innerWidth;
        PositionY = Math.random() * innerHeight;
        width = Math.random() * 100;
        height = Math.random() * 100;
        crc2.beginPath();
        crc2.rect(PositionX, PositionY, width, height);
        crc2.fillStyle = "hsla(" + h + "," + s + "% , " + l + "%, " + opacity + ")";
        crc2.strokeStyle = "hsla(" + h + "," + s + "% , " + l + "%, " + opacity + ")";
        crc2.lineWidth = 3;
        crc2.closePath();
        let strokeOrFill = Math.floor(Math.random() * 2);
        if (strokeOrFill == 0) {
            crc2.fill();
        }
        else {
            crc2.stroke();
        }
        ;
    }
    ;
    function triangle() {
        h = Math.random() * 360;
        s = Math.random() * 100;
        l = Math.random() * 100;
        opacity = Math.random();
        rotation = Math.random() * 2;
        PositionX = Math.random() * innerWidth;
        PositionY = Math.random() * innerHeight;
        linelength1 = Math.floor(Math.random() * 200);
        linelength2 = Math.floor(Math.random() * 200);
        // let x1: number = PositionX + linelength1;
        // let y1: number = PositionY + linelength1;
        // let x2: number = PositionX + linelength1 +linelength2;
        // let y2: number = PositionY + linelength1 + linelength2;
        crc2.beginPath();
        crc2.moveTo(PositionX, PositionY);
        crc2.lineTo(PositionX + linelength1, PositionY + linelength1);
        crc2.lineTo(PositionX + linelength2, PositionY - linelength2);
        // console.log(PositionX, PositionY, x1, y1, x2, y2);
        crc2.closePath();
        console.log(PositionX);
        crc2.fillStyle = "hsla(" + h + "," + s + "% , " + l + "%, " + opacity + ")";
        crc2.strokeStyle = "hsla(" + h + "," + s + "% , " + l + "%, " + opacity + ")";
        crc2.lineWidth = 3;
        let strokeOrFill = Math.floor(Math.random() * 2);
        if (strokeOrFill == 0) {
            crc2.fill();
        }
        else {
            crc2.stroke();
        }
        ;
        // let path: Path2D = new Path2D();
        // path.arc(60, 60, 50, 0, 1.5 * Math.PI);
        // crc2.fill(path);
    }
    ;
})(Canvas_GenerativeArt || (Canvas_GenerativeArt = {}));
//# sourceMappingURL=canvas.js.map