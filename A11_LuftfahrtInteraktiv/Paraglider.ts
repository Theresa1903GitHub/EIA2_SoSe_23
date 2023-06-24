namespace L11_LuftfahrtInteraktiv {
    export class Paraglider extends Moveable {
        private activity: string;
        public color: string;

        public constructor (){
            let randomX: number = Math.random()*(crc2.canvas.width - 100);
            let position = new Vector(randomX+100, 271);
            let velocity = new Vector (-50, 0);
            super(position, velocity )
            // let randomX: number = Math.random()*(crc2.canvas.width - 100);
            // this.position = new Vector(randomX+100, 271);
            // this.velocity = new Vector (45,45);
            let h: number = Math.random() * 360;
            let s: number = Math.random() * 100;
            let l: number = Math.random() * 100;
            this.color = "hsl(" + h + "," + s + "% , " + l + "%)";
            this.activity = "walk";
        }

        public draw (): void {  
            crc2.save();
            crc2.translate(this.position.x, this.position.y); 
            if(this.activity == "fly"){
            // Paraglider 
            // Schirm
            
            crc2.beginPath();
            crc2.moveTo(0, 18);
            crc2.lineTo(-20, -15);
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.stroke();
    
            crc2.beginPath();
            crc2.moveTo(0, 18);
            crc2.lineTo(20, -15);
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.stroke();
    
            crc2.beginPath();
            crc2.ellipse(0, -18, 25, 8, 0, 0, 2*Math.PI, true);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();

            // Person
    
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(-10, 30);
            crc2.lineTo(10, 30);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(0, 0, 6, 0, 2*Math.PI, true); 
            crc2.fillStyle = "#d1bc8a";
            crc2.closePath();
            crc2.fill();
            
            crc2.restore();
            }
            else {
            // Kletterer/Wanderer
            
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(-10, 30);
            crc2.lineTo(10, 30);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(0, 0, 6, 0, 2*Math.PI, true); 
            crc2.fillStyle = "#d1bc8a";
            crc2.closePath();
            crc2.fill();
            
            crc2.restore();
        }}

        public move(_timeslice: number): void{
            // fly
            if(this.activity == "fly"){
            let offset: Vector = new Vector (this.velocity.x+(strength*0.5), this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
                if (this.position.y > 270){
                this.activity = "walk";                
                this.velocity.set (-50, 0);
                } 
            }
            if(this.activity == "walk"){
            let offset: Vector = new Vector (this.velocity.x-(strength*0.5), this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
                if (this.position.x <= 100){
                this.activity = "climb";
                this.velocity.set (0, -50);
                }
            }
            if (this.activity == "climb"){
            let offset: Vector = new Vector (this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y<=122){
                this.activity = "fly";
                this.velocity.set (100, 40);
                }
            }
        }

        public isHit(_hotspot: Vector): boolean {
            let hitsize: number = 30;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }         
    }
}