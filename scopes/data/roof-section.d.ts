

declare namespace data {
    class RoofSection {

        
        /**
         * Roof color
         */
        readonly color?: Color;
        
        /**
         * Roof floor height
         */
        readonly floorHeight?: number;
        
        /**
         * Roof overhang value
         */
        readonly overhang?: number;
        
        /**
         * Roof rotation
         */
        readonly roofRotation?: number;
        
        /**
         * Roof angle
         */
        readonly angle?: number;

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
