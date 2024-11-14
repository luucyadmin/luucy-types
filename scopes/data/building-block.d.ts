declare namespace data {
    class BuildingBlock {

        readonly id: number;

        /**
         * Block index within the building
         */
        index: number;

        color?: Color;

        /**
         * Height above terrain of the block
         */
        heightAboveTerrain: number;

        /**
         * The center location of the block
         */
        center: GlobalPosition;

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
