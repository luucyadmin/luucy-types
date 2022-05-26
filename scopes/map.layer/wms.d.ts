declare namespace map.layer {
    class WMSLayer implements Layer {
        constructor(name: string, url: string, layer: string, parameters: { [name: string]: string | boolean | number });

        onPositionSelect: Event<GlobalPosition>;
        canSelectFeatures: boolean;
        opacity: number;
        hidden: boolean;
        visible: boolean;

        hide(): void;
        show(): void;
        remove(): void;
    }
}