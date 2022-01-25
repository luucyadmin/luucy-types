declare namespace ui {
    /**
     * Represents a environment provided area
     */
    abstract class Area {
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