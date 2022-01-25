declare namespace ui {
    /** 
     * Number input field 
     * 
     * Creates a number field used for user input.
     *
     * @example // Create input
     * const input = new ui.TextField("Test Input", 100);
     * input.onValueChange.subscribe(value => {
     *     console.log(value);
     * });
     * 
     * section.add(input);
     */
    class NumberField extends Element implements FieldElement {
        constructor(label: string, value?: number, placeholder?: string);

        /**
         * Describes the purpose of an input and is displayed next to the field
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * The gray text visible in the text field when no text has been entered
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        placeholder: string;

        /**
         * The fields number as entered by the user.
         * Setting this programatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` or `onImmediateValueChange` event instead!
         */
        value: number;

        /**
         * The event is triggered whenever the user changes the input.
         */
        onValueChange: Event<number>;

        /**
         * The event is triggered whenever the user is changing the input.
         * Do not do heavy calculations, requests or complex ui manipulations in here, as this event is called on every keystroke!
         * 
         * @example // Calculate a price while the user is typing
         * const basePrice = 69;
         * 
         * // price labeled value
         * const heatingCostLabel = new ui.LabeledValue("Heating Cost");
         * section.add(heatingCostLabel);
         * 
         * // create input field
         * const areaInput = new ui.Input("Area");
         *
         * areaInput.onImmediateValueChange.subscribe(value => {
         *     heatingCostLabel.value = basePrice * value;
         * });
         */
        onImmediateValueChange: Event<number>;

        onContentChange: Event<void>;
    }
}