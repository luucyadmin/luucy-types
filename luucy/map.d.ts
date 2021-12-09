/**
 * Interactions with luucys main map.
 * 
 * @example // Creating a marker and a button to focus it
 * const marker = new map.Marker(new map.Position(47.0469494, 8.3157369));
 * 
 * section.add(new ui.Button("Focus Marker", () => {
 *     marker.focus();
 * }));
 */
declare namespace map {
    /**
     * A 3D position / location on the map
     * 
     * The latitude and longitude are in the format used by most maps (Google Maps, ...).
     * 
     * @example const lucerne = new map.Position(47.050390, 8.310263),
     * @example const zurich = new map.Position(47.3774162, 8.5414963),
     * @example const paris = new map.Position(48.8578516, 2.2942959),
     * @example const newYork = new map.Position(40.689834, -74.045940),
     * @example const london = new map.Position(51.500822, -0.123705);
     */
    class Position {
        constructor(latitude: number, longitude: number, height?: number);

        /**
         * Latitude describing the east/west-ness of a point.
         * 
         * This is the one that is `0` in Greenwich near London.
         */
        latitude: number;

        /**
         * Longitude describing the north/south-ness of a point.
         */
        longitude: number;

        /** 
         * Height in meters above sealevel.
         */
        height?: number;

        /**
         * Creates a copy of the position, without the `height` component.
         */
        flattenedCopy(): Position;

        /**
         * Creates a copy of the position, optionally offset by `offsetLatitude` and `offsetLongitude`
         */
        copy(offsetLatitude?, offsetLongitude?): Position;
    }

    class MapElement {
        /**
         * Indicates if the element is currently visible
         * 
         * Hide a marker by calling `.hide()`
         */
        readonly visible: boolean;

        /**
         * Indicates if the element is currently hidden.
         * 
         * Show a element by calling `.show()`
         */
        readonly hidden: boolean;

        /**
         * Hides the element temporarely
         * 
         * Use `.remove()` to fully remove the element from the map!
         * 
         * The element can be shown again by calling `.show()`
         * Will change `.visible` and `.hidden`
         */
        hide();

        /**
         * Shows the element after beeing hidden by `.hide()`
         * 
         * Will change `.visible` and `.hidden`
         */
        show();

        /**
         * Will move the camera to the element.
         * 
         * Do not focus an element without any user interaction!
         */
         focus();

         /**
          * Removes the element from the map.
          */
         remove();
    }

    /**
     * Marker
     * 
     * A marker is automatically added to the map when created, indicating a significant location.
     * Setting a `height` value in the passed position will make the marker float above the ground.
     * 
     * The color will default to `Color.luucyBrand`.
     * A label may be provided, but it should not be longer than 2 characters.
     * 
     * @example // Show a marker at the lucerne main station
     * new map.Marker(new map.Position(47.0469494, 8.3157369));
     * 
     * ui.areas.panel.add(
     *     new ui.Button("I want to see the station!", () => marker.focus())
     * );
     */
    class Marker extends MapElement {
        constructor(position: Position, color?: Color, label?: string);

        /**
         * Returns the current position of the marker
         */
        readonly position: Position;

        /**
         * Moves the marker to the defined position.
         * 
         * To refocus your marker, call `.focus()`
         */
        move(position: Position);

        /**
         * Moves marker by lat, long and height.
         * 
         * To refocus your marker, call `.focus()`
         */
        moveBy(latitude: number, longitude: number, height: number);

        /**
         * Called whenever the marker is clicked on
         * 
         * @example // Focus a selected marker
         * const marker = new map.Marker(position);
         * marker.onSelect.subscribe(() => marker.focus());
         */
        onSelect: Event<void>;
    }

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
     * ui.areas.panel.add(
     *     new ui.Button("Show me the 1000m tower!", () => polygon.focus())
     * );
     */
    class Polygon extends MapElement {
        constructor(positions: Position[], height: number, color?: Color);
    }

    /**
     * Colors the ground and objects on top of it within the area defined by the positions.
     */
     class ColoredArea {
        constructor(points: Position[], color?: Color);

        /**
          * Removes the colored area from the map.
          */
        remove();
    }

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