declare namespace map {
    /**
     * Building
     * 
     * A building is a shape built out of multiple floors. 
     * 
     * @example // Create a simple building with 15 equal floors
     * const floor = new data.BuildingFloor([
     *     new GlobalPosition(47.050390, 8.310263)], FloorType.overground, 2.85, Color.red);
     * const roof = new data.RoofSection(RoofType.flat, 5.2);     
     * 
     * 
     * const building = new map.Building(floor, 15, roof);
     * 
     * section.add(
     *     new ui.Button(ui.icons.building, "Generate me a building!!", () => building.focus())
     * );
     */
    class Building implements MapElement {
        constructor(floors: [], floorsCount?: number, roof?: data.RoofSection);

        readonly visible: boolean;
        readonly hidden: boolean;
        readonly floors: data.BuildingFloor[];
        readonly roof: data.RoofSection;
        
        hide(): void;
        show(): void;
        focus(): void;
        remove(): void;

    }
}