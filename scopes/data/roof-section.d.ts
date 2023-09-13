declare enum RoofType {
    FLAT,
    DOUBLEPITCH,
    MONOPITCH,
}

declare namespace data {
    class RoofSection extends BuildingSection {
        /**
         * Type of the roof
         */
        readonly roofType?: RoofType;

        /**
         * Roof pitch
         */
        readonly roofPitch?: number;
    }
}
