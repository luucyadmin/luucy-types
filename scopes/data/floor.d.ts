declare namespace data {
    /**
     * BuildingFloor
     *
     * A building floor is a part of the building
     *
     * @example // Create a simple building floor with 4 points (100x100 meters) at specific location defined by center point
     * const points = [
     *    new LocalPosition(50, 50),
     *    new LocalPosition(50, -50),
     *    new LocalPosition(-50, -50),
     *    new LocalPosition(-50, 50)
     * ];
     * const floor = new data.BuildingFloor(
     *     new GlobalPosition(47.050390, 8.310263),points, data.overground, 2.85, Color.red);
     *
     * @see map.Building for how to use BuildingFloor for Building creating
     */
    class BuildingFloor {
        constructor(
            centerPoint: GlobalPosition,
            points: LocalPosition[],
            floorType?: FloorType,
            height?: number,
            color?: Color,
            usage?: BuildingUsage
        );

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
         * The center location of the floor
         */
        centerPoint: GlobalPosition;

        /**
         * Floor points
         */
        points?: LocalPosition[];
    }
}
