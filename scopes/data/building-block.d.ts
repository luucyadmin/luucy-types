declare namespace data {
    class BuildingBlock {

        constructor(
            points: LocalPosition[],
            centerPoint?: LocalPosition,
        );

        readonly id: number;

        color?: Color;

        /**
         * Height of the block
         */
        readonly height: Metric;

        /**
         * The center location of the block
         */
        centerPoint: LocalPosition;

        /**
         * Type of the block
         */
        type: BlockType;

        /**
         * Block usages
         * Compatible only for Buildings 2.0
         */
        readonly blockUsages: BuildingUsage[];

        /**
         * Parent building
         */
        readonly building: Building;

        /**
         * Emits when the block is selected
         */
        onTypeChange: Event<BlockType>;

        /**
         * Emits when block usages change
         * Compatible only for Buildings 2.0
         */
        onBlockUsagesChange: Event<BuildingUsage[]>;
    }
}
