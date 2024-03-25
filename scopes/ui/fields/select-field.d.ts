declare namespace ui {


    interface SelectGroup<T> {
        groupName: string;
        values: T[];
    }
    /** 
     * Select input field 
     * 
     * Displays multiple choices as a select box.
     * 
     * @example // Price calculation based on apartment type
     * const types = [
     * { name: "Basic Apartment", pricePerM2: 100, category: "A" },
     * { name: "Standard Apartment", pricePerM2: 150, category: "A" },
     * { name: "Luxury Apartment", pricePerM2: 250, category: "B" },
     * ];
     * 
     * const area = 69;
     * 
     * let priceLabel = new ui.LabeledValue("Price");
     * section.add(priceLabel);
     * 
     * const typeSelect = new ui.SelectField("Apartment Type", types, types[1], type => type.name, type => type.category);
     * typeSelect.onValueChange.subscribe(type => {
     * priceLabel.value = type.pricePerM2 * area;
     * });
     *     
     * section.add(typeSelect);  
     * 
     */
     class SelectField<T> extends Element implements FieldElement {
        /**
         * Create a select field
         * 
         * @param label - Describes the purpose of an input and is displayed next to the field
         * @param values - The values that can be seletced
         * @param value - What is currently selected. This can be null
         * @param transform - How to convert a value into a string for displaying it. 
         * @param transformGroup - How to convert a value into a string for grouping values. 
         * @param tooltip - Will provide tooltip on mouseover
         */
        constructor(label: string, values: T[], value?: T, transform?: (item: T) => string, transformGroup?: (item: T) => string, tooltip?: string);

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
         * `.push()` and other array operators will NOT work, the `options` property needs to be overwritten to trigger an update!
         */
        options: T[];

        /**
         * The available select groups (options groupped by the groupTransformer)
         * 
         */
        groups: SelectGroup<T>[];

        /**
         * The event is triggered whenever the user changes the option.
         */
        onValueChange: Event<T>;

        readonly transformer: (item: T) => string;

        readonly groupTransformer: (item: T) => string;

        onContentChange: Event<void>;
    }
}