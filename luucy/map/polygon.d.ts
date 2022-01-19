declare namespace map {
    /**
     * Polygon
     * 
     * A polygon is a shape built out of multiple points with a flat top and bottom area. 
     * It is perfect to display simple buildings.
     * 
     * @example // Create a utopian skyliner at lucerne main station
     * const polygon = new map.Polygon([
     *     new map.Position(47.050390, 8.310263),
     *     new map.Position(47.050390, 8.311263),
     *     new map.Position(47.051390, 8.311263),
     *     new map.Position(47.051390, 8.310263),
     * ], 1000);
     * 
     * section.add(
     *     new ui.Button(ui.icons.building, "Show me the 1000m tower!", () => polygon.focus())
     * );
     */
    class Polygon extends MapElement {
        constructor(positions: Position[], height: number, color?: Color);
    }
}