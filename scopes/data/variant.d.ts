declare namespace data {
    /** 
     * Luucy Variant 
     * 
     * A project variant presents a way of realizing a infrastructure project. 
     * Multiple variants will be compared to eachother by the user to find the optimal way to realize a project.
     */
    class Variant {
        /**
         * Variant Id
         */
        readonly id?: number;

        /** 
         * Variant name 
         */
        readonly name: string;

        /**
         * Contains the floor area of all buildings of this project variant 
         */
        readonly totalFloorArea: Metric;

        /**
         * Contains the volume of all buildings of this project variant 
         */
        readonly totalVolume: Metric;

        /**
         * Contains the footprint area of all buildings of this project variant
         */
        readonly footprintArea: number;

        /**
         * Contains all usages of this variant
         */
        readonly usages: Usage[];

        /**
         * User-drawn buildings on map
         */
        readonly buildings: Building[];

        /**
         * Parcels
         */
        readonly parcels: Parcel[];

        /**
         * Parent project
         */
        readonly project: Project;

        /**
         * Maximum height of all building in the variant
         * total - sum of all maximums of all heights
         * overground - maximum of all overground heights
         * underground - maximum of all underground heights
         */
        readonly maxBuildingHeight: Metric;
        /**
         * Mininum height of all building in the variant
         * total - sum of all minimums of all heights
         * overground - minimum of all overground heights
         * underground - minimum of all underground heights
         */
        readonly minBuildingHeight: Metric;

        /** 
         * Will be called when the variants volume changes 
         * 
         * @example // Listen to changes in the volume
         * variant.onTotalVolumeChange.subscribe(volume => {
         *     console.log("Volume of ", variant.name, " changed to ", volume.total.toMetricVolumeString());
         * });
         */
        readonly onTotalVolumeChange: Event<Metric | null>;

        /** 
         * Will be called when the variants footprint area changes 
         * 
         */
        readonly onFootprintAreaChange: Event<number | null>;

        /** 
         * Will be called when the variants floor area changes 
         * 
         * @example // Listen to changes in the area
         * variant.onTotalAreaChange.subscribe(area => {
         *     console.log("Area of ", variant.name, " changed to ", area.total.toMetricAreaString());
         * });
         */
        readonly onTotalFloorAreaChange: Event<Metric | null>;

        /**
         * Will be fired when the usages change
         * 
         * @example // Listen for usage changes and list them
         * const usagesLabel = new ui.LabeledValue('Usages');
         * 
         * variant.onUsagesChange.subscribe(usages => {
         *     usagesLabel.value = usages.map(usage => `${usage.type} (${usage.percent}%)`).join(', ');
         * });
         */
        readonly onUsagesChange: Event<Usage[]>;

        /**
         * Will be fired when a user drawn building changes
         * 
         * @example // Subscribe to building changes
         * const buildingsLabel = new ui.LabeledValue('Usages');
         * 
         * variant.onBuildingsChange.subscribe(buildings => {
         *     buildingsLabel.value = buildings.map(building => `${building.height}m`).join(', ');
         * });
         */
        readonly onBuildingsChange: Event<Building[]>;

        /**
         * Will be fired when parcels change
         */
        readonly onParcelsChange: Event<Parcel[]>;

        /** 
         * Will be called when the variants maximum bulding height changes 
         * 
         * @example // Listen to changes in the maximum height
         * variant.onMaxBuildingHeightChange.subscribe(maxHeight => {
         *     console.log("Maximum height of ", variant.name, " changed to ", maxHeight.total.toMetricAreaString());
         * });
         */
        readonly onMaxBuildingHeightChange: Event<Metric | null>;

        /** 
         * Will be called when the variants minimum bulding height changes 
         * 
         * @example // Listen to changes in the minimum height
         * variant.onMaxBuildingHeightChange.subscribe(minHeight => {
         *     console.log("Minimum height of ", variant.name, " changed to ", minHeight.total.toMetricAreaString());
         * });
         */
        readonly onMinBuildingHeightChange: Event<Metric | null>;

        /**
         * Variant storage
         * 
         * Any data in this storage area will be bound to this variant.
         */
         readonly storage: StorageRouter;
    }
}