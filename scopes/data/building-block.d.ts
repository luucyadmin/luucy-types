declare namespace data {
    class BuildingBlock {

        constructor(
            centerPoint: LocalPosition,
        );

        readonly id: string;

        
        /**
         * Block index within the building
         */
        index: number;

        color?: Color;

        /**
         * Height of the block
         */
        height: number;

        /**
         * The center location of the block
         */
        centerPoint: LocalPosition;

        /**
         * Type of the block
         */
        type: FloorType;

        /**
         * Block usages
         */
        blockUsages?: BuildingUsage[];

        /**
         * Parent building
         */
        readonly building: Building;

        /**
         * Emits when the block is selected
         */
        onTypeChange: Event<FloorType>;

        /**
         * Emits when the block height is changed
         */
        onHeightChange: Event<number>;


        /**
         * Emits when block usages change
         * Compatible only for Buildings 2.0
         */
        onBlockUsagesChange: Event<BuildingUsage[]>;
    }
}
