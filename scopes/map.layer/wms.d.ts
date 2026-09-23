declare namespace map.layer {
    class WMSLayer implements Layer {
        /**
         * Creates an imagery layer with a web map service source
         * 
         * WMS layers may provide object info when selecting a point on the map.
         * Enable `canSelectFeatures` to allow features to be selected.
         * Beware, this might interfere with custom `onPositionSelect` handlers.
         */
        constructor(name: string, url: string, layer: string, parameters: { [name: string]: string | boolean | number }, canSelectFeatures?: boolean);

        /**
         * Emitted when the user clicks the map and no other tool or layer took action
         */
        onPositionSelect: Event<GlobalPosition, GlobalPosition | undefined>;

        /**
         * Name of the layer
         */
        name: string;

        /**
         * Controls the layers opacity
         *
         * Value ranges between 0 (not visible) and 1 (fully visible)
         */
        opacity: number;

        /**
         * Indicates if the layer is hidden by `.hide()` or is still visible
         */
        hidden: boolean;

        /**
         * Indicates if the layer is visible (true) or has been hidden by `.hide()`
         */
        visible: boolean;

        /**
         * Sets the order index of the layer
         *
         * - 'base': Sattelite Imagery, Plots, ...
         * - 'default': No specific order index
         * - 'tinted-overlay': Heatmaps (for example for noise pollution levels)
         * - 'top': Overlays like labels, streets, ...
         */
        orderIndex: 'default' | 'base' | 'tinted-overlay' | 'top';

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