declare namespace data {
    interface Variant {
        /**
         * Adds a colored area to a variant as a shape
         * 
         * The shape will now be user editable and the plugin looses control over the object.
         */
        addArea(shape: map.ColoredArea): Promise<void>;
    }
}