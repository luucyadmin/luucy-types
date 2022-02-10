/// <reference no-default-lib="true" />
/// <reference lib="DOM" />

declare namespace ui {
    class Host {
        root: Node;

        static createElement(tag: string, attributes?: { [ key: string ]: any }, ...children: HTMLElement[]): HTMLElement;
        static createTextNode(text: string): Node;

        static addStyles(css: string): void;
    }
}