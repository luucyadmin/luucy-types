

declare namespace data {
    class RoofSection {

        constructor(roofType?: RoofType, floorHeight?: number, color?: Color, overhang?: number, roofRotation?: number, angle?: number)
        /**
         * Roof color
         */
        color?: Color;
        
        /**
         * Roof volume
         */
        volume?: number;
        /**
         * Roof area
         */
        area?: number;
        /**
         * Roof floor height
         */
        floorHeight?: number;
        
        /**
         * Roof overhang value
         */
        overhang?: number;
        
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
