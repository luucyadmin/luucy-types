declare namespace data {
    /**
     * BuildingFloor
     *
     * A building floor is a part of the building block
     *
     * @example // Create a simple building floor
     * const floor = new data.BuildingFloor(data.overground, 2.85);
     * block.floors.push(floor)
     *
     * @see data.BuildingBlock for how to use BuildingFloor for Building creating
     */
    class BuildingFloor {
        constructor(floorType: FloorType, height: number);

        /**
         * Color of the floor
         */
        color?: Color;

        /**
         * Height of the floor
         */
        height: number;

        /**
         * Type of the floor
         */
        floorType: FloorType;

        /**
         * Floor usage
         */
        usage?: BuildingUsage;

        
        /**
         * Area of the floor
         */
        readonly floorArea: Metric;

        /**
         * Volume of floor
         */
        readonly volume: Metric;

        /**
         * Reduced area of the floor
         */
        readonly reducedFloorArea: Metric;

        /**
         * Reduced volume of floor
         */
        readonly reducedVolume: Metric;

        /**
         * Define building floor area reduction
         * Default is 0
         */
        areaReduction?: number;

        /**
         * Define building floor volume reduction
         * Default is 0
         */
        volumeReduction?: number;
    }
}
