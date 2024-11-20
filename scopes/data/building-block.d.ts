declare namespace data {
    class BuildingBlock {

        constructor(groundPoints: LocalPosition[]);

        /**
         * Block index within the building
         */
        index: number;

        /**
         * Block index of the block which this one is positioned on top
         */
        anchorBlockindex: number | null;

        /**
         * The heading component in radian
         */
        heading?: number;

        /**
         * Height above terrain of the block
         */
        heightAboveTerrain: number;

        /**
         * Vertecies defining the shape on the ground
         */
        groundPoints: LocalPosition[];

        /**
         * The center location of the block in local coordinate
         */
        center: LocalPosition;

        floors: BuildingFloor[];

        /**
         * Roof details
         */
        roof?: RoofSection;

        /**
         * Emits when the roof section of the building change
         */
        onRoofChange: Event<RoofSection>;

        /**
         * Emits when the floors are changed
         */
        onFloorsChange: Event<BuildingFloor[]>;
    }
}
