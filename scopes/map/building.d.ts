declare namespace map {
    /**
     * Building
     *
     * A building is a shape built out of multiple floors.
     *
     * @example // Create a simple building with 15 equal floors
     * const floor = new data.BuildingFloor( data.overground, 2.85);
     * const block = new data.BuildingBlock();
     * block.floors = [floor];
     * block.roof = new data.RoofSection(data.flat, 5.2);
     *
     * let building;
     *
     * section.add(
     *     new ui.Button(ui.icons.building, "Generate me a building!!", () => {
     *             building = new map.Building(new GlobalPosition(47.050390, 8.310263), [block], 15);
     *             building.focus();
     *  })
     * );
     */
    class Building implements MapElement {
        /**
         * Generate a rectangular buuilding with given dimension and starting point
         * @param centerPoint the center of the building
         * @param x the X axis of the building dimension in meters
         * @param y the Y axis of the building dimension in meters
         * @param floorsCount if not defined, defaults 10
         */
        constructor(
            centerPoint: GlobalPosition,
            x: number,
            y: number,
            floorsCount?: number
        );
        /**
         * Generate a bulding by defined floors and roof
         * @param centerPoint the center of the building
         * @param buildingBlocks at least one block needs to be defined
         * @param floorsCount if `buildingBlocks` length is less then the `blocksCount` than it remaining blocks are generated based on the first item from `buildingBlocks` array
         */
        constructor(
            centerPoint: GlobalPosition,
            buildingBlocks: data.BuildingBlock[],
            floorsCount?: number,
        );

        readonly visible: boolean;
        readonly hidden: boolean;
        readonly buildingBlocks: data.BuildingBlock[];

        /**
         * Define building opacity in %
         * Default is 100
         */
        opacity?: number;

        /**
         * Define overground floor height
         * Default is 3.2
         *
         * Does override floorHeight for the overground blocks
         */
        floorHeight?: number;

        /**
         * Define underground floor height
         * Default is 3.2
         *
         * Does override floorHeight for the underground block
         */
        undergroundFloorHeight?: number;

        /**
         * Define building area reduction
         * Default is 0
         */
        areaReduction?: number;

        /**
         * Define building volume reduction
         * Default is 0
         */
        volumeReduction?: number;

        /**
         * Define building usage - will apply on every building block
         */
        buildingUsage?: data.BuildingUsage;

        /**
         * Define height above terrain
         * Default is 0
         */
        heightAboveTerrain?: number;

        /**
         * Enabled displaying floors in the building
         * @param show
         */
        showFloors(show: boolean): void;

        /**
         * Adds a overground floor to given block
         * @param type floor type to be added
         * @param blockIndex index of the block - BuildingBlock.index (default 0)
         * @param count number of overground floors to be added (default 1)
         */
        addFloor(tpye: FloorType, blockIndex?: number, count?: number): void;

        /**
         * Remove defined floor type (it's first occurance) from a given building block
         * @param blockIndex index of the block - BuildingBlock.index 
         * @param floorType  type of the floor that will be removed
         */
        removeFloor(floorType: FloorType, blockIndex?: number): void;

        /**
         * The event is triggered whenever the user changes the building.
         */
        onBuildingChange: Event<Building>;

        hide(): void;
        show(): void;
        focus(): void;
        remove(): void;
    }
}
