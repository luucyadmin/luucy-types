declare namespace map {
    /**
     * Colors the ground and objects on top of it within the area defined by the positions.
    */
    class ColoredArea {
        constructor(points: GlobalPosition[], color?: Color, border?: { color: Color, width: number } | Color);

        readonly points: GlobalPosition[];
        readonly color: Color;
        readonly border?: { color: Color, width?: number };

        /**
          * Removes the colored area from the map.
        */
        remove(): void;
    }
}