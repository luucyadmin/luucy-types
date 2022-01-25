declare namespace ui {
    /** 
     * Select input field 
     * 
     * Displays multiple choices as a select box.
     * 
     * @example // Price calculation based on apartment type
     * const types = [
     *     { name: "Basic Apartment", pricePerM2: 100 },
     *     { name: "Standard Apartment", pricePerM2: 150 },
     *     { name: "Luxury Apartment", pricePerM2: 250 },
     * ];
     * 
     * const area = 69;
     * 
     * const priceLabel = new ui.LabeledValue("Price");
     * section.add(area);
     * 
     * const typeSelect = new ui.SelectField("Apartment Type", types, types[1], type => type.name);
     * typeSelect.onValueChange.subscribe(type => {
     *     priceLabel = type.pricePerM2 * area;
     * });
     */
     class SelectField<T> extends Element implements FieldElement {
        /**
         * Create a select field
         * 
         * @param label - Describes the purpose of an input and is displayed next to the field
         * @param values - The values that can be seletced
         * @param value - What is currently selected. This can be null
         * @param transform - How to convert a value into a string for displaying it. 
         */
        constructor(label: string, values: T[], value?: T, transform?: (item: T) => string);

        /**
         * Describes the purpose of an input and is displayed next to the field
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * The fields selected option.
         * Setting this programatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` event instead!
         */
        value: T;

        /**
         * The available select options
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         * `.push()` and other array operators will NOT work, the `values` property needs to be overwritten to trigger an update!
         */
         values: T[];

        /**
         * The event is triggered whenever the user changes the option.
         */
        onValueChange: Event<T>;

        readonly transformer: (item: T) => string;
        onContentChange: Event<void>;
    }
}