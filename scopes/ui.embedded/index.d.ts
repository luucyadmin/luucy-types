/// <reference path="dom.d.ts" />

declare namespace ui.embedded {
    /**
     * Host for an embedded DOM tree
     */
    abstract class Host {
        /**
         * Root element of the embedded DOM tree
         */
        root: ui.embedded.Element;

        /**
         * Adds a CSS rule scoped to the given selector
         */
        addStyle(selector: string, rules: { [key: string]: any }): this;
    }

    /**
     * Enables the embedded DOM and returns its host
     */
    function enable(): Host;

    /**
     * Disables the embedded DOM
     */
    function disable(): void;
}