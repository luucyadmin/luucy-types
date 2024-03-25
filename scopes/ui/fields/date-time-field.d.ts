declare namespace ui {
    /** 
     * Date-Time input field 
     * 
     * Creates a date-time field used for user input.
     *
     * @example // Create input
     * const dateTimeField = new ui.DateTimeField("Show shadows at");
     * 
     * dateTimeField.onValueChange.subscribe(value => {
     *     map.daylight.pause();
     *     map.daylight.date = value;
     *     map.daylight.shadows = true;
     * });
     * 
     * section.add(dateTimeField);
     */
    class DateTimeField extends Element implements FieldElement {
        constructor(label: string, value?: Date, tooltip?: string);

        /**
         * Describes the purpose of an input and is displayed next to the field
         * 
         * Can be changed after being added to an area/element and will automatically update.
         */
        label: string;

        /**
         * The fields date as entered by the user.
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
        immediateValue?: Date;

        /**
         * The event is triggered whenever the user changes the input.
         */
        onValueChange: Event<Date | undefined>;

        /**
         * The event is triggered whenever the user is changing the input.
         * Do not do heavy calculations, requests or complex ui manipulations in here, as this event is called on every keystroke!
         */
        onImmediateValueChange: Event<Date | undefined>;

        onContentChange: Event<void>;
    }
}
