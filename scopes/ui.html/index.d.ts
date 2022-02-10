/// <reference no-default-lib="true" />
/// <reference lib="DOM" />

declare namespace ui {
    class Host {
        root: ui.html.Element;

        addStyles(css: string): void;
    }
}