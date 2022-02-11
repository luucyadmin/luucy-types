declare namespace ui.embedded {
    abstract class Host {
        root: ui.embedded.Element;

        addStyle(selector: string, css: { [key: string]: any }): this;
    }

    function enable(): Host;
    function disable(): void;
}