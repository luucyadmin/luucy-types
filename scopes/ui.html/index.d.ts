/// <reference no-default-lib="true" />
/// <reference lib="DOM" />

declare namespace ui {
    interface Host {
        root: ui.html.Element;

        addStyles(css: string): void;
    }

    const embedded: {
        enable(): Host;
        disable(): void;
    }
}