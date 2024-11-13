

declare namespace data {
    class RoofSection {

        constructor(roofType?: RoofType, roofRotation?: number, angle?: number)
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
        roofType?: RoofType;

    }
}
