namespace geometry {
    export class Vector2 {
        public x: Fx8;
        public y: Fx8;

        constructor(x: Fx8, y: Fx8) {
            this.x = x;
            this.y = y;
        }

        public magnitude(): Fx8 {
            // TODO: Don't convert to float. Keep in fixed point.
            return Fx8(Math.sqrt(Fx.toFloat(Vector2.Dot(this, this))));
        }

        public normal(): Vector2 {
            const mag = this.magnitude();
            return new Vector2(Fx.div(this.x, mag), Fx.div(this.y, mag));
        }

        public scaled(s: Fx8): Vector2 {
            return new Vector2(Fx.mul(this.x, s), Fx.mul(this.y, s));
        }

        public static Zero(): Vector2 {
            return new Vector2(Fx.zeroFx8, Fx.zeroFx8);
        }

        public static One(): Vector2 {
            return new Vector2(Fx.oneFx8, Fx.oneFx8);
        }

        public static Add(a: Vector2, b: Vector2): Vector2 {
            return new Vector2(Fx.add(a.x, b.x), Fx.add(a.y, b.y));
        }

        public static Subtract(a: Vector2, b: Vector2): Vector2 {
            return new Vector2(Fx.sub(a.x, b.x), Fx.sub(a.y, b.y));
        }

        public static Dot(a: Vector2, b: Vector2): Fx8 {
            return Fx.add(Fx.mul(a.x, b.x), Fx.mul(b.y, b.y));
        }

        public static Normal(v: Vector2): Vector2 {
            return v.normal();
        }

        public static Scale(v: Vector2, s: Fx8): Vector2 {
            return v.scaled(s);
        }

        public static Magnitude(v: Vector2): Fx8 {
            return v.magnitude();
        }
    }
}