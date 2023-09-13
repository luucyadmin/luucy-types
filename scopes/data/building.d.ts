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
        readonly id: number;

        /**
         * Name of the building
         */
        readonly name: string;

        /**
         * Rotation angle of the entire building
         */
        readonly angle: number;

        /**
         * Center point of the shape
         */
        readonly center: GlobalPosition;

        /**
         * Area taken up by the building
         */
        readonly footprint: number;

        /**
         * Height of the entire building
         *
         * Will take the talles segment
         */
        readonly height: Metric;

        /**
         * Area of the entire building
         */
        readonly floorArea: Metric;

        /**
         * Volume of the entire building
         */
        readonly volume: Metric;

        /**
         * Sections making up the building
         */
        readonly sections: BuildingSection[];

        /**
         * Parent variant
         */
        readonly variant: Variant;

        /**
         * Building usages
         * Compatible only for Buildings 2.0
         */
        readonly buildingUsages: BuildingUsage[];

        /**
         * Building floors
         */
        readonly floors: BuildingFloor[];

        /**
         * Roof building section
         */
        readonly roofSection: RoofSection;

        /**
         * Emits when the floors of the building change
         */
        onFloorsChange: Event<BuildingFloor[]>;

        /**
         * Emits when the roof section of the building change
         */
        onRoofChange: Event<RoofSection>;

        /**
         * Emits when the sections of the building change
         */
        onSectionsChange: Event<BuildingSection[]>;

        /**
         * Emits when the volume, floorArea or footprint of the building change
         */
        onMetricsChange: Event<void>;

        /**
         * Emits when the building is moved
         *
         * Passes the new center to the subscribers
         */
        onPositionChange: Event<GlobalPosition>;

        /**
         * Emits when building usages change
         * Compatible only for Buildings 2.0
         */
        onBuildingUsagesChange: Event<BuildingUsage[]>;
    }
}
