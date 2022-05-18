declare namespace map {
    interface ColoredArea {
        /**
         * Adds the colored area to a variant as a shape
         * 
         * The shape will now be user editable and the plugin looses control over the object.
         */
        releaseToVariant(): Promise<void>;
    }

    interface Line {
        /**
         * Adds the line to a variant as a shape
         * 
         * The shape will now be user editable and the plugin looses control over the object.
         */
         releaseToVariant(): Promise<void>;
    }
}

declare namespace data {
    interface Project {
        createVariant(name: string): Promise<Variant>;
    }
}