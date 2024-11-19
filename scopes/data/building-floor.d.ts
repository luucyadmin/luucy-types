declare namespace data {
    /**
     * BuildingFloor
     *
     * A building floor is a part of the building block
     *
     * @example // Create a simple building floor
     * const floor = new data.BuildingFloor(data.overground, 2.85);
     * buildingBlock.addFloor(floor)l
     *
     * @see data.BuildingBlock for how to use BuildingFloor for Building creating
     */
    class BuildingFloor {
        constructor(
            floorType: FloorType,
            height: number,
        );

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

    }
}
