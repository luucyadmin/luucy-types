declare namespace data {
    /**
     * User-drawn building prop
     * 
     * Users can create multiple building props within the map.
     * The shapes are exposed in this class.
     * 
     * Subscribe to `.onBuildingsChange` of `data.Variant` to get notified about building changes
     */
    class Building {
        /**
         * Height of the shape
         */
        height: number;

        /**
         * Points defining the shape
         */
        points: map.LocalPosition[];

        /**
         * Gets fired whenever the height or points of the building changes
         */
        onGeometryChange: Event<void>;
    }
}