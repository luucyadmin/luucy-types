declare namespace map.layer {
    interface Layer {
        /**
         * Emitted when the uer clicks the map and no other tool or layer took action
         */
        onPositionSelect: Event<GlobalPosition>;

        /**
         * Sets the order index of the map
         * ```
         * layer.orderIndex = 'tinted-overlay';
         * ```
         * 
         * - 'base': Sattelite Imagery, Plots, ...
         * - 'default': No specific order index
         * - 'tinted-overlay': Heatmaps (for example for noise pollution levels)
         * - 'top': Overlays like labels, streets, ...
         */
        orderIndex: 'default' | 'base' | 'tinted-overlay' | 'top';

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