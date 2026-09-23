declare namespace ui.tool {
    /**
     * A custom modeling tool active on the map
     */
    interface ModelingTool {
        /**
         * Aborts the tool
         */
        abort(): void;

        /**
         * Emits when the tool is aborted
         */
        onAbort: Event<void>;

        /**
         * Completes the tool
         */
        complete(): void;

        /**
         * Emits when the user clicks on the map while the tool is active
         */
        onMapClick: Event<GlobalPosition, GlobalPosition | undefined>;
    }
}