declare namespace ui {
    /** 
     * Time input field 
     * 
     * Creates a time field used for user input.
     *
     * @example // Create input
     * // Step 3600 equals 1 hour
     * const timeField = new ui.DateField("Show traffic noise at", null, null, null, 3600);
     * 
     * timeField.onValueChange.subscribe(value => {
     *     // Show traffic noise at the selected time
     * });
     * 
     * section.add(timeField);
     */
    class TimeField extends Element implements FieldElement {
        constructor(label: string, value?: Date, min?: Date, max?: Date, step?: number);

        /**
         * Describes the purpose of an input and is displayed next to the field
         * 
         * Can be changed after being added to an area/element and will automatically update.
         */
        label: string;

        /**
         * Smallest time possible to limit the user's input.
         */
        min?: Date;
        
         /**
          * Biggest time possible to limit the user's input.
          */
        max?: Date;

        /**
         * Step between times in seconds to limit the user's input.
         * Default is 60 (seconds) for 1 minute.
         */
        step: number;

        /**
         * The fields time as entered by the user.
         * Setting this programmatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` or `onImmediateValueChange` event instead!
         */
        value?: Date;

        /**
         * The fields immediate value as entered by the user.
         * Setting this programmatically will not trigger any events.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` or `onImmediateValueChange` event instead!
         */
        immediateValue: Date;

        /**
         * The event is triggered whenever the user changes the input.
         */
        onValueChange: Event<Date>;

        /**
         * The event is triggered whenever the user is changing the input.
         * Do not do heavy calculations, requests or complex ui manipulations in here, as this event is called on every keystroke!
         */
        onImmediateValueChange: Event<Date>;

        onContentChange: Event<void>;
    }
}
