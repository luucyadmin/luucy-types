

declare namespace data {
    class BuildingFloor {

        constructor(positions: LocalPosition[], floorType?: FloorType, height?: number, color?: Color, usage?: BuildingUsage)

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
        floorType?: FloorType;

        /**
         * Floor usage
         */
        usage?: BuildingUsage;

        /**
         * Floor points
         */
        positions?: LocalPosition[];
    }
}
