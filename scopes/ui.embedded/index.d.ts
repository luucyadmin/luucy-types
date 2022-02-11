/// <reference path="dom.d.ts" />

declare namespace ui.embedded {
    abstract class Host {
        root: ui.embedded.Element;

        addStyle(selector: string, rules: { [key: string]: any }): this;
    }

    function enable(): Host;
    function disable(): void;
}