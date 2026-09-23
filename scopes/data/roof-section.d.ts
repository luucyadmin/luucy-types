

declare namespace data {
    /**
     * Describes the roof of a `BuildingBlock`.
     */
    class RoofSection {

        /**
         * Creates a new roof section of the given type, rotation and angle.
         */
        constructor(roofType: RoofType, roofRotation?: number, angle?: number)
        /**
         * Roof color
         */
        color?: Color;
        
        /**
         * Roof rotation
         */
        roofRotation?: number;
        
        /**
         * Roof angle
         */
        angle?: number;

        /**
         * Type of the roof
         */
        roofType: RoofType;

    }
}
