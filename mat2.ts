namespace geom {
    export class Matrix2x2 {
        public data: Fx8[][];

        constructor(data: Fx8[][]) {
            this.data = data;
        }

        public static Identity(): Matrix2x2 {
            return new Matrix2x2([
                [Fx.oneFx8, Fx.zeroFx8],
                [Fx.zeroFx8, Fx.oneFx8]]);
        }

        public static Zero(): Matrix2x2 {
            return new Matrix2x2([
                [Fx.zeroFx8, Fx.zeroFx8],
                [Fx.zeroFx8, Fx.zeroFx8]]);
        }

        public static RotationMatrix(angle: Fx8): Matrix2x2 {
            const s = trig.fxsin(angle);
            const c = trig.fxcos(angle);
            return new Matrix2x2([
                [c, Fx.neg(s)],
                [s, c]]);
        }

        public static MultiplyVector2(mat: Matrix2x2, vec2: Vector2): Vector2 {
            const result = [Fx.zeroFx8, Fx.zeroFx8];
            const vec = [vec2.x, vec2.y];

            // TODO: unroll
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    result[i] = Fx.add(result[i], Fx.mul(mat.data[i][j], vec[j]));
                }
            }

            return new Vector2(result[0], result[1]);
        }

        public static Multiply(matA: Matrix2x2, matB: Matrix2x2): Matrix2x2 {
            const result = Matrix2x2.Zero();

            // TODO: unroll
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    for (let k = 0; k < 2; k++) {
                        result.data[i][j] = Fx.add(result.data[i][j], Fx.mul(matA.data[i][k], matB.data[k][j]));
                    }
                }
            }

            return result;
        }
    }
}