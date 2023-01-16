declare namespace map {
    /**
     * Label
     * 
     * A label is automatically added to the map when created, naming a significant location.
     * Setting a `height` value in the passed position will make the label float above the ground.
     * 
     * If no color is passed when creating the label it will default to `Color.luucyBrand`.
     * 
     * @example // Show a label at the lucerne main station
     * const label = new map.Label(new GlobalPosition(47.0469494, 8.3157369), "Train station");
     * 
     * section.add(
     *     new ui.Button(ui.icons.pointOfInterest, "I want to see the train station!", () => label.focus())
     * );
     */
     class Label implements MapElement {
        constructor(position: GlobalPosition, title: string, color?: Color);

        /**
         * Returns the current position of the label
         */
        readonly position: GlobalPosition;

        /**
         * Returns the title of the label
         */
        readonly title: string;

        /**
         * Called whenever the label is clicked on
         * 
         * @example // Focus a selected label
         * const label = new map.Label(position, 'Hello World');
         * label.onSelect.subscribe(() => label.focus());
         */
        onSelect: Event<void>;

        /**
         * Moves the label to the defined position.
         * 
         * To refocus your label, call `.focus()`
         */
        move(position: GlobalPosition): void;

        /**
         * Moves label by lat, long and height.
         * 
         * To refocus your label, call `.focus()`
         */
        moveBy(latitude: number, longitude: number, height: number): void;

        /**
         * If set to true, labels will be visible thru buildings
         */
        overlayBuildings: boolean;

        readonly visible: boolean;
        readonly hidden: boolean;
        
        hide(): void;
        show(): void;
        focus(): void;
        remove(): void;
    }
}