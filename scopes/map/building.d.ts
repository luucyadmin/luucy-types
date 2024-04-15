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

        constructor(
            floors: data.BuildingFloor[],
            floorsCount?: number,
            roof?: data.RoofSection
        );

        readonly visible: boolean;
        readonly hidden: boolean;
        readonly floors: data.BuildingFloor[];
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
         * Enabled displaying floors in the building
         * @param show
         */
        showFloors(show: boolean): void;

        /**
         * Adds a overground floor
         * @param count number of overground floors to be added (default 1)
         */
        addFloor(count?: number): void;

        /**
         * Adds a underground floor
         * @param count number of udnerground floors to be added  (default 1)
         */
        addUndergroundFloor(count?: number): void;

        /**
         * Remove defined floor
         * @param floor from the building floors array
         */
        removeFloor(floor: data.BuildingFloor): void;

        /**
         * Set height above terrain
         * @param height in meters above the terrain (default 0)
         */
        setHeightAboveTerrain(height: number): void;

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
