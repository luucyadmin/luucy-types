declare namespace map {
    /**
     * Colors the ground and objects on top of it within the area defined by the positions.
    */
    class ColoredArea {
        /**
         * Creates a colored area from the given points
         */
        constructor(points: GlobalPosition[], color?: Color, border?: { color: Color, width: number } | Color);

        /**
         * Points defining the area
         */
        readonly points: GlobalPosition[];

        /**
         * Fill color of the area
         */
        readonly color: Color;

        /**
         * Border color and width of the area
         */
        readonly border?: { color: Color, width?: number };

        /**
         * Moves the camera to the colored area
         */
        focus(): void;

        /**
          * Removes the colored area from the map.
        */
        remove(): void;
    }
}