declare namespace data {
    /**
     * Parcels defined by the user
     * 
     * A user can define a parcel by creating a area shape and enabling "Define area as parcel" - 
     * or a plugin can create a parcel by using `ColoredArea.releaseAsParcelToVariant()`
     */
    class Parcel {
        id: number;

        /**
         * Name of the parcel, defined by the user
         */
        name: string;

        /**
         * Metric area of the parcel
         */
        area: number;

        /**
         * Center Point of the parcel
         */
        center: GlobalPosition;

        /**
         * Boundaries of the parcel
         */
        bounds: GlobalPosition[];

        /**
         * Fires when the boundaries of the parcel change.
         * A change of the location (center) or the area will emit this event.
         */
        onBoundaryChange: Event<GlobalPosition[]>;
    }
}