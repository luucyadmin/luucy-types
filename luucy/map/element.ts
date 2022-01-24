declare namespace map {
    interface MapElement {
        /**
         * Indicates if the element is currently visible
         * 
         * Hide a marker by calling `.hide()`
         */
        readonly visible: boolean;

        /**
         * Indicates if the element is currently hidden.
         * 
         * Show a element by calling `.show()`
         */
        readonly hidden: boolean;

        /**
         * Hides the element temporarely
         * 
         * Use `.remove()` to fully remove the element from the map!
         * 
         * The element can be shown again by calling `.show()`
         * Will change `.visible` and `.hidden`
         */
        hide(): void;

        /**
         * Shows the element after beeing hidden by `.hide()`
         * 
         * Will change `.visible` and `.hidden`
         */
        show(): void;

        /**
         * Will move the camera to the element.
         * 
         * Do not focus an element without any user interaction!
         */
        focus(): void;

        /**
         * Removes the element from the map.
         */
        remove(): void;
    }
}