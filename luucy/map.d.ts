/**
 * Interactions with luucys main map.
 * 
 * @example // Creating a marker and a button to focus it
 * const marker = new map.Marker(new map.Position(8.3157369, 47.0469494, 460));
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
     * @example const lucerne = new map.Position(8.310263, 47.050390, 460),
     * @example const zurich = new map.Position(8.5414963, 47.3774162, 460),
     * @example const paris = new map.Position(2.2942959, 48.8578516, 150),
     * @example const newYork = new map.Position(-74.045940, 40.689834, 20),
     * @example const london = new map.Position(-0.123705, 51.500822, 150);
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
    }

    /**
     * Marker
     * 
     * A marker is automatically added to the map when created, indicating a significant location.
     * 
     * @example // Show a marker at the lucerne main station
     * new map.Marker(new map.Position(8.3157369, 47.0469494, 460));
     */
    class Marker {
        constructor(position: Position);

        /**
         * Will move the camera to the marker.
         * 
         * Do not automatically focus a marker without any user interaction!
         */
        focus();

        /**
         * Removes the marker from the map.
         */
        remove();
    }
}