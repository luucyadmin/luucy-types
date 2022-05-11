declare namespace map.layer {
    interface Layer {
        /**
         * Emitted when the uer clicks the map and no other tool or layer took action
         */
        onPositionSelect: Event<GlobalPosition>;

        /**
         * Controls the layers opacity
         */
        opacity: number;

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