/// <reference path="colored-area.d.ts" />
/// <reference path="marker.d.ts" />
/// <reference path="polygon.d.ts" />
/// <reference path="position.d.ts" />

/**
 * Interactions with luucys main map.
 * 
 * @example // Creating a marker and a button to focus it
 * const marker = new map.Marker(new map.Position(47.0469494, 8.3157369));
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
    function focus(elements: MapElement[]);

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
    const onPositionSelect: Event<Position>;
}