declare namespace data {
    class BuildingBlock {

        /**
         * Create a new building block
         * @param groundPoints ground points of the block by local position. The lenght has to be > 3
         * 
         * @example Block with 50x50 dimensions:
         *  const points = [
            new wrapper.plugin.environment.LocalPosition(dimensionX / 2, dimensionY / 2, 0),
            new wrapper.plugin.environment.LocalPosition(dimensionX / 2, -dimensionY / 2, 0),
            new wrapper.plugin.environment.LocalPosition(-dimensionX / 2, -dimensionY / 2, 0),
            new wrapper.plugin.environment.LocalPosition(-dimensionX / 2, dimensionY / 2, 0)
          ];
          const block = new wrapper.plugin.environment.data.BuildingBlock(points);
         */
        constructor(groundPoints: LocalPosition[]);

        /**
         * Block index within the building
         */
        blockIndex: number;

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
