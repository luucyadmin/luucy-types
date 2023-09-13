declare enum FloorType {
    overground,
    underground,
    ground,
}

declare namespace data {
    class BuildingFloor {
        readonly id: number;

        /**
         * Name of the floor
         */
        readonly name: string;

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
