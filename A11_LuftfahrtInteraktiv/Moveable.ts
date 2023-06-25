namespace L11_LuftfahrtInteraktiv {

    export abstract class Moveable {
        public position: Vector;
        public velocity: Vector;
    
        protected constructor(_position: Vector, _velocity: Vector) {
            this.position = _position;
            this.velocity = _velocity;
        }
        public move(_timeslice: number, _strength?: number):void{    
            let offset: Vector = new Vector(this.velocity.x * strength, this.velocity.y);
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
        public abstract draw(_x?: number, _y?: number): void
    }
}