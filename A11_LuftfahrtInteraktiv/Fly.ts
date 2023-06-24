namespace L11_LuftfahrtInteraktiv {
    export class Fly extends Moveable {
        private rotation: number;

        public constructor (_rotation: number){
            let randomX: number = Math.random()*crc2.canvas.width;
            let randomY: number = Math.random()*crc2.canvas.height;
            let position = new Vector (randomX, randomY);
            let velocity = new Vector (150, Math.tan(_rotation)*30);
            super(position, velocity);
            
            this.rotation = _rotation;
        }

        public draw(): void{
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
    }
}