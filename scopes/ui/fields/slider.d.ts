declare namespace ui {
    /** 
     * Slider
     * 
     * Displays a slider with a max and min value. 
     * Users can move a knob to adjust the value.
     * 
     * If no `step` is set, the slider will automatically have 100 steps.
     * 
     * @example // Create a grade slider and automatically show if the user passed the test
     * const slider = new ui.Slider("Math test grade", 1, 6, 4, 0.25);
     * const label = new ui.Label("");
     * 
     * slider.onImmediateValueChange.subscribe(value => {
     *     if (value < 4) {
     *         label.content = "Did not pass this test, better luck next time!";
     *     } else if (value < 5) {
     *         label.content = "Passed the test, huh!";
     *     } else {
     *         label.content = "Excellent!";
     *     }
     * });
     * 
     * section.add(slider);
     */
    class Slider extends Element implements FieldElement {
        constructor(label: string, min: number, max: number, value?: number, step?: number, help?: string);

        /**
         * Describes the purpose of an input and is displayed next to the field
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * The minimal value on the slider. 
         * Negative values are possible.
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        min: number;

        /**
         * The maximal value on the slider. 
         * Negative values are possible.
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        max: number;

        /**
         * The current value of the slider.
         * Setting this programatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` or `onImmediateValueChange` event instead!
         */
        value?: number;

        /**
         * The fields immediate value as entered by the user.
         * Setting this programatically will not trigger any events.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` or `onImmediateValueChange` event instead!
         */
        immediateValue: number;

        /**
         * The step of the slider. 
         * To have `50` steps on a slider from `0` to `10`, the `step` has to be set to `0.2` (`(10 - 0) / 50`).
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        step?: number;

        /**
         * The event is triggered whenever the user changes the input.
         */
        onValueChange: Event<number>;

        /**
         * The event is triggered whenever the user is changing the input.
         * Do not do heavy calculations, requests or complex ui manipulations in here, as this event is called on every tiny movement of the mouse!
         */
        onImmediateValueChange: Event<number>;

        onContentChange: Event<void>;
    }
}