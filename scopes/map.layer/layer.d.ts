declare namespace map.layer {
    interface Layer {
        /**
         * Emitted when the uer clicks the map and no other tool or layer took action
         */
        onPositionSelect: Event<GlobalPosition>;

        /**
         * Some map layer sources (like WMS) may provide custom object info.
         * Enable this to allow features to be selected.
         * This might interfere with custom `onPositionSelect` handlers.
         */
        canSelectFeatures: boolean;

        /**
         * Controls the layers opacity
         * 
         * Value ranges between 0 (not visible) and 1 (fully visible)
         */
        opacity: number;

        /**
         * Indicates if the layer is visible (true) or has been hidden by `.hide()`
         */
        visible: boolean;

        /**
         * Indicates if the layer is hidden by `.hide()` or is still visible
         */
        hidden: boolean;

        /**
         * Hides the layer
         */
        hide(): void;

        /**
         * Shows the layer after beeing hidden
         */
        show(): void;

        /**
         * Removes the layer
         */
        remove(): void;
    }
}