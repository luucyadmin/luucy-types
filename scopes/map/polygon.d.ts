declare namespace map {
    /**
     * Polygon
     * 
     * A polygon is a shape built out of multiple points with a flat top and bottom area. 
     * It is perfect to display simple buildings.
     * 
     * @example // Create a utopian skyliner at lucerne main station
     * const polygon = new map.Polygon([
     *     new GlobalPosition(47.050390, 8.310263),
     *     new GlobalPosition(47.050390, 8.311263),
     *     new GlobalPosition(47.051390, 8.311263),
     *     new GlobalPosition(47.051390, 8.310263),
     * ], 1000);
     * 
     * section.add(
     *     new ui.Button(ui.icons.building, "Show me the 1000m tower!", () => polygon.focus())
     * );
     */
    class Polygon implements MapElement {
        /**
         * Creates a polygon from the given points and height
         */
        constructor(positions: GlobalPosition[], height: number, color?: Color, border?: { color: Color, width?: number } | Color);

        /**
         * Indicates if the polygon is currently visible
         */
        readonly visible: boolean;

        /**
         * Indicates if the polygon is currently hidden
         */
        readonly hidden: boolean;

        /**
         * Points defining the polygon shape
         */
        readonly points: GlobalPosition[];

        /**
         * Height of the polygon
         */
        readonly height: number;

        /**
         * Border color and width of the polygon
         */
        readonly border?: { color: Color, width?: number };

        /**
         * Parameters used to generate this polygon, if it was created via `map.generatePolygons`
         */
        generatedFrom?: {
            bufferDistance: number;
            areaCoverageRatio: number;
            maxTotalHeight: number;
            parcelId?: number,
            parcelType?: string,
        }

        /**
         * Hides the polygon
         */
        hide(): void;

        /**
         * Shows the polygon after beeing hidden
         */
        show(): void;

        /**
         * Moves the camera to the polygon
         */
        focus(): void;

        /**
         * Removes the polygon from the map
         */
        remove(): void;

    }
}