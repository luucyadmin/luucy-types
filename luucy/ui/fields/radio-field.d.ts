declare namespace ui {
    /** 
     * Radio input field 
     * 
     * Displays multiple choices as bullet points.
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
     * const typeSelect = new ui.RadioField("Apartment Type", types, types[1], type => type.name);
     * typeSelect.onValueChange.subscribe(type => {
     *     priceLabel = type.pricePerM2 * area;
     * });
     */
    class RadioField<T> extends Element implements FieldElement {
        /**
         * Create a radio field
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
         * The fields selected radio value.
         * Setting this programatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` event instead!
         */
        value: T;

        /**
         * The event is triggered whenever the user selects another radio.
         */
        onValueChange: Event<T>;
    }
}