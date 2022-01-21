declare namespace map {
    /**
     * Colors the ground and objects on top of it within the area defined by the positions.
    */
    class ColoredArea {
        constructor(points: Position[], color?: Color);

        /**
          * Removes the colored area from the map.
        */
        remove(): void;
    }
}