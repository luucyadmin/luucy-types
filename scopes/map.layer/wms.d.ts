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

        onPositionSelect: Event<GlobalPosition>;
        opacity: number;
        hidden: boolean;
        visible: boolean;

        hide(): void;
        show(): void;
        remove(): void;
    }
}