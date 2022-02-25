declare namespace ui {
    /**
     * Represents a section of a plugin in the project panel
     * 
     * @example // Create app section with a test label
     * const section = ui.createProjectPanelSection();
     * section.add(new ui.Label('test'));
     */
    class AppSection extends Container {
        readonly name: string;
        readonly author: string;
        readonly logoUrl: string;

        /**
         * Will be triggered when the app is opened in the project panel
         */
        readonly onOpen: Event<void>;

        /**
         * Will be triggered when the app is closed in the project panel
         */
        readonly onClose: Event<void>;
    }
}