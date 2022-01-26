declare namespace data {
    class Usage {
        /**
         * Usage Type
         * 
         * The usages type, like `Standardized, simple standard`
         */
        readonly type: string;

        /**
         * Percent of usage in variant
         */
        readonly percent: number;

        /**
         * Area of the variant using this usage type
         */
        readonly area: number;

        /**
         * Volume of the variant using this usage type
         */
        readonly volume: number;
    }
}