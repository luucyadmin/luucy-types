declare namespace data {
    /**
     * Building Wall
     * 
     * A buildings walls can be calculated by calling `measureWalls()` on `Building`.
     */
    class Wall {
        /**
         * Length of the wall
         */
        readonly length: number;

        /**
         * Height of the wall
         */
        readonly height: number;

        /**
         * Area of the wall
         */
        readonly area: number;

        /**
         * Angle in radians of the wall
         */
        readonly angle: number;
    }
}