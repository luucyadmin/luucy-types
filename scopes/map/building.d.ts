declare namespace map {
    /**
     * Building
     *
     * A building is a shape built out of multiple floors.
     *
     * @example // Create a simple building with 15 equal floors
     * const floor = new data.BuildingFloor([
     *     new GlobalPosition(47.050390, 8.310263)], data.overground, 2.85, Color.red);
     * const roof = new data.RoofSection(data.flat, 5.2);
     *
     * let building;
     *
     * section.add(
     *     new ui.Button(ui.icons.building, "Generate me a building!!", () => {
     *             building = new map.Building([floor], 15, roof);
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
         * @param blocksCount if not defined, defaults 10
         */
        constructor(
            centerPoint: GlobalPosition,
            x: number,
            y: number,
            blocksCount?: number
        );
        /**
         * Generate a bulding by defined floors and roof
         * @param centerPoint the center of the building
         * @param buildingBlocks at least one block needs to be defined
         * @param blocksCount if `buildingBlocks` length is less then the `blocksCount` than it remaining blocks are generated based on the first item from `buildingBlocks` array
         * @param roof roof definition
         */
        constructor(
            centerPoint: GlobalPosition,
            buildingBlocks: data.BuildingBlock[],
            blocksCount?: number,
            roof?: data.RoofSection
        );

        readonly visible: boolean;
        readonly hidden: boolean;
        readonly buildingBlocks: data.BuildingBlock[];
        /**
         * Define the roof section of the building
         * Overrides values defined in constructor
         */
        roof?: data.RoofSection;
        /**
         * Define fill color for the building
         */
        color?: Color;

        /**
         * Define building opacity in %
         * Default is 100
         */
        opacity?: number;

        /**
         * Define overground floor height
         * Default is 3.2
         *
         * Does override floorHeight for the overground floors
         */
        floorHeight?: number;

        /**
         * Define underground floor height
         * Default is 3.2
         *
         * Does override floorHeight for the underground floors
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
         * Define building usage
         */
        buildingUsage?: data.BuildingUsage;

        /**
         * Define height above terrain
         * Default is 0
         */
        heightAboveTerrain?: number;

        /**
         * Enabled displaying blocks in the building
         * @param show
         */
        showBlocks(show: boolean): void;

        /**
         * Adds a overground block
         * @param count number of overground blocks to be added (default 1)
         */
        addBlock(count?: number): void;

        /**
         * Adds a underground block
         * @param count number of underground blocks to be added  (default 1)
         */
        addUndergroundBlock(count?: number): void;

        /**
         * Remove defined block
         * @param block from the building floors array
         */
        removeBlock(block: data.BuildingBlock): void;

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
