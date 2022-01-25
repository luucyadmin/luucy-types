declare namespace ui {
    /**
     * Represents a environment provided area
     */
    interface Area {
        /**
         * Add element to area
         */
        add(element: Element): void;

        /**
         * Remove element from the area
         */
        remove(element: Element): void;
    }
}