namespace L09_2_LuftfahrtClasses{
    export class Fly {
        position: Vector;
        velocity: Vector;
        rotation: number;

        constructor (_rotation: number){
            let randomX: number = Math.random()*crc2.canvas.width;
            let randomY: number = Math.random()*crc2.canvas.height;
            this.position = new Vector (randomX, randomY);
            this.velocity = new Vector (150, Math.tan(_rotation)*30);
            this.rotation = _rotation;
        }

        draw(): void{
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
    
            crc2.beginPath();
            crc2.arc(0, 0, 2, 0, 2* Math.PI, true);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
    
            crc2.beginPath();
            crc2.ellipse(0, 0, 2, 5, this.rotation, 0, 2*Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.stroke();
    
            crc2.restore();
        }

        move(_timeslice: number): void{
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
    }
}