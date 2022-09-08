declare namespace map {
    /**
     * Marker
     * 
     * A marker is automatically added to the map when created, indicating a significant location.
     * Setting a `height` value in the passed position will make the marker float above the ground.
     * 
     * The color will default to `Color.luucyBrand`.
     * A label may be provided, but it should not be longer than 2 characters.
     * 
     * @example // Show a marker at the lucerne main station
     * const marker = new map.Marker(new GlobalPosition(47.0469494, 8.3157369));
     * 
     * section.add(
     *     new ui.Button(ui.icons.pointOfInterest, "I want to see the station!", () => marker.focus())
     * );
     */
     class Marker implements MapElement {
        constructor(position: GlobalPosition, color?: Color, label?: string);
        constructor(position: GlobalPosition, icon: string, color?: Color);

        /**
         * Highlights the marker by making it slightly bigger.
         * 
         * Multiple markers can be highlighted at the same time
         */
        highlight(): void;

        /**
         * Unhighlights the marker
         */
        unhighlight(): void;

        /**
         * Returns the current position of the marker
         */
        readonly position: GlobalPosition;

        /**
         * Moves the marker to the defined position.
         * 
         * To refocus your marker, call `.focus()`
         */
        move(position: GlobalPosition): void;

        /**
         * Moves marker by lat, long and height.
         * 
         * To refocus your marker, call `.focus()`
         */
        moveBy(latitude: number, longitude: number, height: number): void;

        /**
         * Called whenever the marker is clicked on
         * 
         * @example // Focus a selected marker
         * const marker = new map.Marker(position);
         * marker.onSelect.subscribe(() => marker.focus());
         */
        onSelect: Event<void>;

        /**
         * If set to true, the markers will be visible thru buildings
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