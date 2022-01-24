declare namespace ui {
    /** 
     * Button 
     * 
     * Buttons have a label and will fire the `Click` event when it is clicked
     * 
     * @example // Creating a button
     * // using handler constructor
     * const button = new ui.Button(ui.icons.play, "Click me!", () => {
     *     console.log("Button Clicked!");
     * });
     * 
     * // using event
     * const button = new ui.Button(ui.icons.play, "Click me!");
     * button.onClick.subscribe(() => {
     *     console.log("Button Clicked!");
     * });
     * 
     * section.add(button);
     * 
     * @example // Toggeling button
     * let state = false;
     * 
     * const button = new ui.Button(ui.icons.center, "Turn on", () => {
     *     // toggle the state variable
     *     state = !state;
     * 
     *     console.log("Toggeled to: ", state);
     * 
     *     // update the buttons text and icon
     *     button.label = state ? "Turn off" : "Turn on";
     *     button.icon = state ? ui.icons.full : ui.icons.center;
     * });
     * 
     * section.add(button);
     */
    class Button extends Element {
        /**
         * Creates a button
         * 
         * @param icon Icon for the button (`ui.icons.`)
         * @param label Will be displayed as the buttons text
         * @param handler Will automatically subscribe to the `onClick` event.
         */
        constructor(label: string, handler?: () => void);
        constructor(icon: IconElement, label: string, handler?: () => void);

        /**
         * Buttons Text
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * Buttons icon
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        icon?: IconElement;

        /**
         * Click Event
         * 
         * Will be fired when the user clicks on the button.
         * The `handler` parameter of the `Button` constructor can be used to automatically subscribe to onClick.
         */
        onClick: Event<void>;

        onLabelChange: Event<void>;
        onIconChange: Event<void>;
    }
}