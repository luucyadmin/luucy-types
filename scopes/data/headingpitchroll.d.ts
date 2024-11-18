declare namespace data {
    /**
     * A rotation expressed as a heading, pitch, and roll. Heading is the rotation about the
     * negative z axis. Pitch is the rotation about the negative y axis. Roll is the rotation about
     * the positive x axis.
     */
    class HeadingPitchRoll {
        readonly id: number;

        constructor(heading?: number, pitch?: number, roll?: number);
        /**
         * The heading component in radian
         */
        readonly heading?: number;

        /**
         * The pitch component in radians.
         */
        readonly pitch?: number;

        /**
         * The roll component in radians.
         */
        readonly roll?: number;
    }
}
