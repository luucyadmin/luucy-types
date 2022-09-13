declare namespace map {
    /**
     * Colors the ground and objects on top of it within the area defined by the positions.
    */
    class Line {
        constructor(points: GlobalPosition[], color?: Color, width?: number);

        /**
         * Append points to the line
         */
        append(...points: GlobalPosition[]): void;

        /**
          * Removes the colored area from the map.
        */
        remove(): void;
    }
}