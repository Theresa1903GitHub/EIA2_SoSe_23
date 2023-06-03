namespace L09_2_LuftfahrtClasses{
    export class Cloud {
        position: Vector;
        velocity: Vector;

        constructor (_positionX: number, _positionY: number) {
            this.position = new Vector (_positionX, _positionY);
            this.velocity = new Vector (500,0);
        }

        draw(_x: number, _y: number): void {
            let nParticles: number = 1;
            let radiusParticle: number = 50;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "hsla(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);   
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                crc2.translate(_x, _y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }

        move (_timeslice: number) {
            console.log("moving cloud");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            

        }
    }
}