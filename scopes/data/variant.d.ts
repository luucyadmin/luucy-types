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
         * 
         * @deprecated Use `totalFloorArea` to get the under and overground values instead. Use `totalFloorArea.total` to get the total floor area
         */
        readonly floorArea: number;

        /**
         * Contains the floor area of all buildings of this project variant 
         */
        readonly totalFloorArea: Metric;

        /** 
         * Contains the volume of all buildings of this project variant 
         * 
         * @deprecated Use `totalVolume` to get the under and overground values instead. Use `totalVolume.total` to get the total volume
         */
        readonly volume: number;

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
         * Will be called when the variants volume changes 
         * 
         * @deprecated Use `onTotalVolumeChange` instead, which is a metric containing over and underground values
         */
        readonly onVolumeChange: Event<number | null>;

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
         * Will be called when the variants floor area changes 
         * 
         * @deprecated Use `onTotalAreaChange` instead, which is a metric containing over and underground values
         */
        readonly onFloorAreaChange: Event<number | null>;

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
         * Will be fired when variant footprint area change
         */
        readonly onFootprintAreaChange: Event<number>;

        /**
         * Variant storage
         * 
         * Any data in this storage area will be bound to this variant.
         */
         readonly storage: StorageRouter;
    }
}