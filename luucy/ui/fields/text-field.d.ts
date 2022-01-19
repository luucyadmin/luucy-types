declare namespace ui {
    /** 
     * Text input field 
     * 
     * Creates a text field used for user input.
     *
     * @example // Create input
     * const input = new ui.TextField("Test Input", "Hello World");
     * input.onValueChange.subscribe(value => {
     *     console.log(value);
     * });
     * 
     * section.add(input);
     */
    class TextField extends Element implements FieldElement {
        constructor(label: string, value?: string, placeholder?: string);

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
         * The fields content as entered by the user.
         * Setting this programatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` or `onImmediateValueChange` event instead!
         */
        value: string;

        /**
         * The event is triggered whenever the user changes the input.
         */
        onValueChange: Event<string>;

        /**
         * The event is triggered whenever the user is changing the input.
         * Do not do heavy calculations, requests or complex ui manipulations in here, as this event is called on every keystroke!
         * 
         * @example // Show a error message when the input is too long
         * // create error message label. content will be set later on
         * const errorMessage = new ui.Label();
         * errorMessage.hide();
         * 
         * section.add(errorMessage);
         * 
         * // create input field
         * const input = new ui.Input("Project Name");
         *
         * input.onImmediateValueChange.subscribe(value => {
         *     if (value.length > 25) {
         *         errorMessage.content = `Project name is ${value.length - 25} characters too long!`;
         *         errorMessage.show();
         *     } else {
         *         errorMessage.hide();
         *     }
         * });
         * 
         * section.add(input);
         */
        onImmediateValueChange: Event<string>;
    }
}