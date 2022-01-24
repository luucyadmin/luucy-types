declare namespace ui {
    /**
     * Represents a section of a plugin in the project panel
     * 
     * @example // Create app section with a test label
     * const section = ui.createProjectPanelSection();
     * section.add(new ui.Label('test));
     */
    interface AppSection extends Container {
        readonly name: string;
        readonly author: string;
        readonly logoUrl: string;
    }
}