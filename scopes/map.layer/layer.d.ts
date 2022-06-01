declare namespace map.layer {
    type LayerOrderIndex = number | 'default' | 'base-map' | 'tinted-overlay' | 'top-map' | string;

    interface Layer {
        /**
         * Emitted when the uer clicks the map and no other tool or layer took action
         */
        onPositionSelect: Event<GlobalPosition>;

        /**
         * Sets the order index of the map
         * 
         * You may set a number or use one of the predefined height classes
         * ```
         * layer.orderIndex = 'tinted-overlay';
         * layer.orderIndex = 503;
         * 
         * // five above all other tinted overlays (does NOT work with -)
         * layer.orderIndex = 'tinted-overlay' + 5;
         * ```
         */
        orderIndex: LayerOrderIndex;

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
         * Name of the layer
         */
        name: string;

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