

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
        readonly volume?: number;
        /**
         * Roof area
         */
        readonly area?: number;
        /**
         * Roof floor height
         * @deprecated - use BuildingFloor.floorHeight instead
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
