namespace L11_LuftfahrtInteraktiv {

        /*
        Aufgabe: 11_LuftfahrtInteraktiv
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 24.06.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Inverted Classroom Jirka, Aufgaben aus EIA1
        */
    
    interface Vector {
        x: number;
        y: number;
    } 

    window.addEventListener("load", handleLoad);
    window.addEventListener("keydown", handleKeyevent);
    window.addEventListener("click", handleClickevent);

    let background: ImageData;
    let moveables: Moveable[] = [];
    export let direction: boolean = true;
    export let strength: number = 1;

    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        create();
        setInterval(update, 20);
        }

    function create(): void{
        for (let index: number = 0; index < 2; index++){
            let randomX: number = Math.random()*crc2.canvas.width;
            let cloud: Cloud = new Cloud(randomX, 100);
            moveables.push(cloud); 
        };
        for (let index: number = 0; index < 10; index++){
            let paraglider: Paraglider = new Paraglider();
            moveables.push(paraglider); 
        };
        for (let index: number = 0; index < 10; index++){
            let randomRotation: number = Math.random()*360;
            let fly: Fly = new Fly(randomRotation);
            moveables.push(fly); 
        };
    };

    function update():void {
        crc2.putImageData(background, 0, 0);
        drawWindsock({x: 370, y: 380});
        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1/60);
        }
    };
    
    function handleKeyevent(e: { keyCode: number; }) {
        // up keyCode == 38
        if (e.keyCode == 38) {
            strength += 1;
            // for (let moveable of moveables) {
            // moveable.velocity.scaleX(2)}
        }
        // down keyCode == 40
        if (e.keyCode == 40) {
            // for (let moveable of moveables) {
            // moveable.velocity.scaleX(1/2)}
            if (strength >= 0)
            strength -= 1;
        }
        // left keyCode == 37
        if (e.keyCode == 37) {
            for (let moveable of moveables) {
                if (moveable.velocity.x >= 0)
                    moveable.velocity.mirror()
            }
            direction = false;
        }
        // right keyCode == 39
        if (e.keyCode == 39) {
            for (let moveable of moveables) {
                if (moveable.velocity.x <= 0)
                    moveable.velocity.mirror()
            }
            direction = true;
            console.log(direction);
        }
    };

    function handleClickevent(_event: MouseEvent): void {
        let hotspot: L11_LuftfahrtInteraktiv.Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let paragliderHit: Paraglider | null = changeParaglider(hotspot);
        if (paragliderHit)
            changeColor(paragliderHit);
    }

    function changeParaglider (_hotspot: L11_LuftfahrtInteraktiv.Vector): Paraglider | null {
        for (let moveable of moveables) {
            if (moveable instanceof Paraglider && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }

    function changeColor (_paraglider: Paraglider): void {
        let h: number = Math.random() * 360;
        let s: number = Math.random() * 100;
        let l: number = Math.random() * 100;
        _paraglider.color = "hsl(" + h + "," + s + "% , " + l + "%)";

    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden-0.01, "white");
        gradient.addColorStop(golden, "HSL(100, 60%, 50%)");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        drawSun({ x: 100, y: 75 });

        let horizon: number = crc2.canvas.height * golden;

        let posMountains: Vector = { x: 0, y: horizon };
        let posMountain: Vector = {x: 0, y: horizon+30};
        drawMountains(posMountains, 75, 160, "grey", "white");
        for(let x:number = 0; x<25; x++){
            let randomX: number = Math.random()*crc2.canvas.width;
            let randomY: number = (Math.random()*crc2.canvas.height)-(1-(crc2.canvas.height*golden));
            drawGras({x: randomX, y: randomY})
        };
        drawMountain(posMountain, 200, 270, "grey", "darkgrey");
        drawPlace({ x: 500, y: 300});
        drawTree({x: 100, y: 280});
        drawTree({x: 70, y: 290});
        drawTree({x: 40, y: 285});
        drawKiosk({x: 780, y: 350});
        // drawWindsock({x: 370, y: 380});

        background = crc2.getImageData (0, 0, crc2.canvas.width, crc2.canvas.height);
    };

    function drawSun(_position: Vector): void {
        let r1: number = 20;
        let r2: number = 100;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
        gradient.addColorStop(0.5, "hsla(60, 100%, 62%, 0.5)");
        gradient.addColorStop(1, "hsla(60, 100%, 62%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 30;
        let stepMax: number = 100;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.75, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    };

    function drawMountain(_position: Vector, _height: number, _width: number, _colorLow: string, _colorHigh: string): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_height);
        crc2.lineTo(_width, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_height);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    };

    function drawGras (_position: Vector): void {
        let size: number = _position.y * _position.y * 0.00008
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -size);
        crc2.moveTo(0, 0);
        crc2.lineTo(-(size/4), -(size/4)*3);
        crc2.moveTo(0, 0);
        crc2.lineTo(size/4, -(size/4)*3);
        crc2.closePath();

        crc2.strokeStyle = "darkgreen";
        crc2.stroke();

        crc2.restore();
    };

    function drawPlace(_position: Vector): void {
        let r1: number = 30;
        let r2: number = 100;
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, r2);

        gradient.addColorStop(0, "hsla(89, 100%, 45%, 1)");
        gradient.addColorStop(0.6, "hsla(80, 100%, 35%, 1)");
       
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.ellipse(0, 0, r1, r2, 0.5* Math.PI, 0, 2* Math.PI, true);
        crc2.closePath();
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    };

    function drawTree (_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.rect(0, 0, 10, 15);
        crc2.fillStyle = "brown";
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-30, 0);
        crc2.lineTo(0, -15);
        crc2.lineTo(-25, -15);
        crc2.lineTo(0, -30);
        crc2.lineTo(-20, -30);
        crc2.lineTo(5, -45);
        crc2.lineTo(30, -30);
        crc2.lineTo(10, -30);
        crc2.lineTo(35, -15);
        crc2.lineTo(10, -15);
        crc2.lineTo(40, 0);
        crc2.lineTo(10, 0);

        crc2.fillStyle = "darkgreen";
        crc2.closePath();
        crc2.fill();

        crc2.restore();
    };

    function drawKiosk (_position: Vector): void{
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, -50);
        crc2.lineTo(0, 0);
        crc2.lineTo(50, 0);
        crc2.lineTo(50, -40);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(50, -40);
        crc2.lineTo(-10, -53);
        crc2.closePath();
        crc2.strokeStyle = "red"
        crc2.lineWidth = 4;
        crc2.stroke();

        crc2.restore();
    };

    function drawWindsock (_position: Vector){
        crc2.save();
        crc2.translate(_position.x, _position.y);

        if (direction == true){
        crc2.beginPath();
        crc2.bezierCurveTo(45, -40, 35, -60, 0, -60);
        // crc2.moveTo(_position.x, _position.y-60);
        crc2.lineTo(0, -40);
        // crc2.lineTo(_position.x+45, _position.y+10);
        // crc2.moveTo(_position.x+45, _position.y+10);
        crc2.bezierCurveTo(0, -50, 50, -30, 45, -25);
        crc2.closePath();
        crc2.fillStyle = "red";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -60);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.restore();
        }
        else{
            crc2.beginPath();
        crc2.bezierCurveTo(-45, -40, -35, -60, 0, -60);
        // crc2.moveTo(_position.x, _position.y-60);
        crc2.lineTo(0, -40);
        // crc2.lineTo(_position.x+45, _position.y+10);
        // crc2.moveTo(_position.x+45, _position.y+10);
        crc2.bezierCurveTo(0, -50, -50, -30, -45, -25);
        crc2.closePath();
        crc2.fillStyle = "red";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -60);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.restore();
        }
    };

}