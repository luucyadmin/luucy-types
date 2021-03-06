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
         * Center point of the shape
         */
        readonly center: GlobalPosition;

        /**
         * Building angle in radians
         */
        readonly angle: number;

        /**
         * Height of the shape
         */
        readonly height: number;

        /**
         * Area taken up by the building
         */
        readonly groundArea: number;

        /**
         * Points defining the shape
         */
        readonly points: LocalPosition[];

        /**
         * Points defining the shape, without the angle translation
         */
        readonly unrotatedPoints: LocalPosition[];

        /**
         * Wall sizes and angles
         */
        readonly walls: Wall[];

        /**
         * Buildings roof
         */
         readonly roof: Roof;

        /**
         * Gets fired whenever the height or points of the building changes
         */
        onGeometryChange: Event<void>;
    }
}