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
        roof?: data.RoofSection;
        /**
         * Define fill color for the building
         */
        color?: Color;

        /**
         * Enabled displaying floors in the building
         * @param show
         */
        showFloors(show: boolean): void;
        
        hide(): void;
        show(): void;
        focus(): void;
        remove(): void;


    }
}