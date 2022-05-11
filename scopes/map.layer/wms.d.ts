declare namespace map.layer {
    class WMSLayer extends Layer {
        constructor(name: string, url: string, layer: string, parameters: { [name: string]: string | boolean | number });
    }
}