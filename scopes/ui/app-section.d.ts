declare namespace ui {
    /**
     * Represents a section of a plugin in the project panel
     * 
     * @example // Create app section with a test label
     * const section = ui.createProjectPanelSection();
     * section.add(new ui.Label('test'));
     */
    class AppSection extends Container {
        /**
         * Will be triggered when the app is opened in the project panel
         */
        readonly onOpen: Event<void>;

        /**
         * Will be triggered when the app is closed in the project panel
         */
        readonly onClose: Event<void>;

        /**
         * Name of the section
         */
        readonly name: string;

        /**
         * icon url from assets
         */
        readonly icon: string;

        constructor(name?: string, icon?: string);
    }
}