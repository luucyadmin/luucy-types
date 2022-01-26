declare namespace map {
    

    /**
     * A local 3D position / location on the map
     * 
     * The latitude and longitude represent meters
     * 
     * @example const threeMetersFiveMeters = new map.LocalPosition(3, 5);
     */
    class LocalPosition {
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
         * Height in meters.
         */
        height?: number;

        /**
         * Creates a copy of the position, without the `height` component.
         */
        flattenedCopy(): LocalPosition;

        /**
         * Creates a copy of the position, optionally offset by `offsetLatitude` and `offsetLongitude`
         */
        copy(offsetLatitude?: number, offsetLongitude?: number, height?: number): LocalPosition;
    }
}