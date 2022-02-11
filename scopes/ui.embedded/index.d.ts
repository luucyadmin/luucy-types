declare namespace ui.embedded {
    interface Host {
        root: ui.embedded.Element;

        addStyles(css: string): void;
    }

    function enable(): Host;
    function disable(): void;
}