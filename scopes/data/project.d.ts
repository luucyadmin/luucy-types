declare namespace data {
    /** 
     * Luucy Project 
     * 
     * A project may contain multiple `Varaint`s.
     */
    class Project {
        /**
         * Variant Id
         */
        readonly id?: number;

        /** 
         * Project name 
         */
        readonly name: string;

        /**
         * Selected Variant.
         * 
         * Try to use the `onVariantSelect` event as it will fire when the user switches variants.
         */
        readonly selectedVariant: Variant | null;

        /** 
         * Will be called when a variant is selected 
         * The emitted variant may be `null`!
         * 
         * The event will be automatically called if a variant is already selected on page load / plugin install.
         * 
         * @example // Listen for variant select
         * project.onVariantSelect.subscribe(variant => {
         *     if (variant) {
         *         console.log("Selected variant: ", variant);
         *     } else {
         *         console.log("No variant selected!")
         *     }
         * });
         */
        readonly onVariantSelect: Event<Variant | null>;

        /**
         * Will be fired whenever the `variants` array changes
         */
        readonly onVariantsChange: Event<Variant[]>;

        /**
         * Project storage
         * 
         * Any data in this storage area will be bound to this project.
         */
        readonly storage: StorageRouter;

        /**
         * Returns the variants of a project
         */
        getVariants(): Promise<Variant[]>;
    }
}