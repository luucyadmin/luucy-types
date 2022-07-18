declare namespace data {
    class BuildingSection {
        readonly id: number;

        /**
         * Name of the slice
         */
        readonly name: string;

        /**
         * Color of the section
         */
        readonly color: {
            main: Color;
            roof: Color
        };

        /**
         * Height of the slice
         */
        readonly height: Metric;

        /**
         * Volume of the section
         */
        readonly volume: Metric;

        /**
         * Floor area of the section
         */
        readonly floorArea: Metric;

        /**
         * Footprint of the section
         */
        readonly footprint: number;

        /**
         * Rotation angle of the section
         */
        readonly angle: number;

        /**
         * Elevation from the bottom of the building
         */
        readonly elevation: number;

        /**
         * Center point of the slice
        */
        readonly center: GlobalPosition;

        /**
         * Vertecies defining the shape
         */
        readonly geometry: LocalPosition[];

        /**
         * Vertecies defining the shape on the ground
         */
        readonly groundPoints: LocalPosition[];

        /**
         * Vertecies defining the shape on the ground, without the angle applied
         * 
         * You're probabbly looking for `groundPoints`.
         */
        readonly unrotatedGroundPoints: LocalPosition[];

        /**
         * Returns the section below this section
         */
        readonly base?: BuildingSection;

        /**
         * Parent building
         */
        readonly building: Building;

        /**
         * Emits when the position of the building segment changed
         * Will fire when the building itself is moved
         */
        onPositionChange: Event<GlobalPosition>;
 
        /**
         * Gets fired whenever the height or points of the building changes
         */
        onGeometryChange: Event<void>;

        /**
         * Wall sizes and angles
         */
        calculateWalls(): Wall[];

        /**
         * Buildings roof
         */
        calculateRoof(): Roof;
    }
}