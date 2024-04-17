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
        constructor(floors: data.BuildingFloor[], floorsCount?: number, roof?: data.RoofSection);

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
         * @param floor to be added - if not defined the first overground floor will be used as a reference
         */
        addFloor(floor?: data.BuildingFloor): void;

        /**
         * Adds a underground floor 
         * @param floor to be added - if not defined the first underground floor will be used as a reference
         */
        addUndergroundFloor(floor?: data.BuildingFloor): void;

        /**
         * Remove defined floor
         * @param index floor index from the building floors array
         */
        removeFloor(index: number): void;


        
        hide(): void;
        show(): void;
        focus(): void;
        remove(): void;


    }
}