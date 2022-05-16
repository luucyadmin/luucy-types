declare namespace data.Variant {
    /**
     * Adds a colored area to a variant as a shape
     * 
     * The shape will now be user editable and the plugin looses control over the object.
     */
    function addArea(shape: map.ColoredArea): Promise<void>;
}