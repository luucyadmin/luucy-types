/// <reference path="colored-area.d.ts" />
/// <reference path="element.d.ts" />
/// <reference path="line.d.ts" />
/// <reference path="marker.d.ts" />
/// <reference path="polygon.d.ts" />
/// <reference path="label.d.ts" />
/// <reference path="building.d.ts" />

/**
 * Interactions with luucys main map.
 *
 * @example // Creating a marker and a button to focus it
 * const marker = new map.Marker(new GlobalPosition(47.0469494, 8.3157369));
 *
 * section.add(new ui.Button(ui.icons.pointOfInterest, "Focus Marker", () => {
 *     marker.focus();
 * }));
 */
declare namespace map {
    /**
     * Focuses multiple elements at once. The map will zoom out to try to show all elements at once.
     *
     * Do not focus a element without any user interaction!
     */
    function focus(
        elements: (
            | ColoredArea
            | Line
            | Marker
            | Polygon
            | GlobalPosition
            | Label
            | Building
        )[]
    ): void;

    /**
     * On Position Select
     *
     * The event will be emitted when the user clicks somewhere on the map.
     *
     * @example // Add a marker where the user clicked
     * map.onPositionSelect.subscribe(position => {
     *     new map.Marker(position.flattenedCopy(), Color.random());
     * });
     */
    const onPositionSelect: Event<GlobalPosition>;

    /**
     * Returns buffered polygon points if succeeded, undefined if failed (can occur when buffer distance < 0 -> buffering inside so that the new polygon intersects with itself)
     *
     * @returns array of global position for each polygon (in case of intersection the provided points may be transformed to two separated polygons hence the array response).
     * For most of the cases the response will be array having the length of 1
     * 
     * @example
     * const buffer = map.bufferPolygon([
     *     new GlobalPosition(47.050390, 8.310263),
     *     new GlobalPosition(47.050390, 8.311263),
     *     new GlobalPosition(47.051390, 8.311263),
     *     new GlobalPosition(47.051390, 8.310263),
     * ], 5, 10);
     * 
     * const polyfon = buffer[0];
     */
    function bufferPolygon(
        points: GlobalPosition[],
        bufferDistance: number,
        areaScaleFactor: number
    ): GlobalPosition[][] | undefined;

    /**
     * Generate a rectangular buuilding with given dimension and starting point
     * @param point the starting point (aca corner)
     * @param x the X axis of the building dimension in meters
     * @param y the Y axis of the building dimension in meters
     * @param floorsCount if not defined, defaults 10
    */
    function fromDimensions(point: GlobalPosition,x: number,y: number,floorsCount?: number): Building;
    
}
