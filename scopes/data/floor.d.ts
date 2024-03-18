

declare namespace data {
    class BuildingFloor {

        constructor(positions: GlobalPosition[], floorType: FloorType, height?: number, color?: Color, usage?: BuildingUsage)

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
        color: Color;

        /**
         * Height of the floor
         */
        height: Metric;

        /**
         * Type of the floor
         */
        floorType: FloorType;

        /**
         * Floor usage
         */
        usage?: BuildingUsage;

        /**
         * Floor points
         */
        positions: GlobalPosition[];
    }
}
