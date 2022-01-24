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
        copy(offsetLatitude?: number, offsetLongitude?: number, height?: number): Position;
    }
}