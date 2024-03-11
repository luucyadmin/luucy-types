declare namespace ui {
    /** 
     * Checkbox
     * 
     * Creates a checkbox used to toggle between true/false.
     *
     * @example // Create input
     * const checkbox = new ui.Checkbox("Test Input", false);
     * checkbox.onValueChange.subscribe(value => {
     *     console.log(value);
     * });
     * 
     * section.add(checkbox);
     */
     class Checkbox extends Element {
        constructor(label: string, value?: boolean, help?: string);

        /**
         * Describes the purpose of an input and is displayed next to the checkbox
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * The checkboxes state.
         * Setting this programatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` or `onImmediateValueChange` event instead!
         */
        value: boolean;

        /**
         * The event is triggered whenever the user changes the input.
         */
        onValueChange: Event<boolean>;

        onContentChange: Event<void>;
    }
}