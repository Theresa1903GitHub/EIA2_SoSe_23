namespace L11_LuftfahrtInteraktiv {
    export class Cloud extends Moveable{

        public constructor (_positionX: number, _positionY: number) {
            let position = new Vector (_positionX, _positionY);
            let velocity = new Vector (100,0)
            super (position, velocity)
        }

        public draw(_x: number, _y: number): void {
            let nParticles: number = 1;
            let radiusParticle: number = 80;
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
    }
}