declare namespace ui.embedded {
    abstract class Host {
        root: ui.embedded.Element;

        addStyles(css: string): void;
    }

    function enable(): Host;
    function disable(): void;
}