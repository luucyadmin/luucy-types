

declare namespace data {
    class BuildingFloor {

        /**
         * Floor identifier
         */
        readonly id: string;

        /**
         * Floor index
         */
        readonly index: number;

        /**
         * Color of the floor
         */
        readonly color: Color;

        /**
         * Height of the floor
         */
        readonly height: Metric;

        /**
         * Type of the floor
         */
        floorType: FloorType;
    }
}
