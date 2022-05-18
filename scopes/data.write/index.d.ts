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
        /**
         * Creates a new variant in the project and returns it
         */
        createVariant(name: string, drawing?: { edges: boolean, sketch: boolean }): Promise<Variant>;
    }
}