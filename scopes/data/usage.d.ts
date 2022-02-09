declare namespace data {
    /**
     * Usage in a variant
     * 
     * Variants can contain multiple usage types.
     * For example, a variant may have 
     * - 70% `Standardized, simple standard` (living area)
     * - 30% `Retail, silent trade` (commercial).
     * 
     * Listen for changes by subscribing to `.onUsagesChange` on `data.Variant`
     */
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