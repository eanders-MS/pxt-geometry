namespace geom {
    export class Vector3 {
        public x: Fx8;
        public y: Fx8;
        public z: Fx8;

        constructor(x: Fx8, y: Fx8, z: Fx8) {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        public dup(): Vector3 {
            return new Vector3(this.x, this.y, this.z);
        }

        public magnitude(): Fx8 {
            // TODO: Don't convert to float. Keep in fixed point.
            return Fx8(Math.sqrt(Fx.toFloat(Vector3.Dot(this, this))));
        }

        public normal(): Vector3 {
            const mag = this.magnitude();
            return new Vector3(Fx.div(this.x, mag), Fx.div(this.y, mag), Fx.div(this.z, mag));
        }

        public scaled(s: Fx8): Vector3 {
            return new Vector3(Fx.mul(this.x, s), Fx.mul(this.y, s), Fx.mul(this.z, s));
        }

        public toVector4(): Vector4 {
            return new Vector4(this.x, this.y, this.z, Fx.oneFx8);
        }

        public static FromNumbers(x: number, y: number, z: number): Vector3 {
            return new Vector3(Fx8(x), Fx8(y), Fx8(z));
        }

        public static Zero(): Vector3 {
            return new Vector3(Fx.zeroFx8, Fx.zeroFx8, Fx.zeroFx8);
        }

        public static One(): Vector3 {
            return new Vector3(Fx.oneFx8, Fx.oneFx8, Fx.oneFx8);
        }

        public static X(): Vector3 {
            return new Vector3(Fx.oneFx8, Fx.zeroFx8, Fx.zeroFx8);
        }

        public static Y(): Vector3 {
            return new Vector3(Fx.zeroFx8, Fx.oneFx8, Fx.zeroFx8);
        }

        public static Z(): Vector3 {
            return new Vector3(Fx.zeroFx8, Fx.zeroFx8, Fx.oneFx8);
        }

        public static Dot(v1: Vector3, v2: Vector3): Fx8 {
            return Fx.add(Fx.add(Fx.mul(v1.x, v2.x), Fx.mul(v1.y, v2.y)), Fx.mul(v1.z, v2.z));
        }

        public static Cross(v1: Vector3, v2: Vector3): Vector3 {
            return new Vector3(
                Fx.sub(Fx.mul(v1.y, v2.z), Fx.mul(v1.z, v2.y)),
                Fx.sub(Fx.mul(v1.z, v2.x), Fx.mul(v1.x, v2.z)),
                Fx.sub(Fx.mul(v1.x, v2.y), Fx.mul(v1.y, v2.x)));
        }

        public static Add(v1: Vector3, v2: Vector3): Vector3 {
            return new Vector3(Fx.add(v1.x, v2.x), Fx.add(v1.y, v2.y), Fx.add(v1.z, v2.z));
        }

        public static Subtract(v1: Vector3, v2: Vector3): Vector3 {
            return new Vector3(Fx.sub(v1.x, v2.x), Fx.sub(v1.y, v2.y), Fx.sub(v1.z, v2.z));
        }

        public static Magnitude(vec: Vector3): Fx8 {
            return vec.magnitude();
        }

        public static Normal(vec: Vector3): Vector3 {
            return vec.normal();
        }

        public static Scale(k: Fx8, vec: Vector3): Vector3 {
            return vec.scaled(k);
        }

        public static Abs(vec: Vector3): Vector3 {
            return new Vector3(Fx.abs(vec.x), Fx.abs(vec.y), Fx.abs(vec.z));
        }
    }
}