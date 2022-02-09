declare namespace data {
    class Roof {
        /**
         * Steepness of the roof
         * 
         * The angle is measured at the gutter: (180deg - angle at the gable) / 2
         */
        readonly steepness: number;

        /**
         * Rotatation of the roof in the world
         */
        readonly rotation: number;

        /**
         * Area of the whole roof (both sides)
         */
        readonly area: number;

        /**
         * Height of the roof (gutter to gable)
         */
        readonly height: number;

        /**
         * True, if the roof is flat
         */
        readonly flat: boolean;

        /**
         * Volume of the roof
         */
         readonly volume: number;
    }
}