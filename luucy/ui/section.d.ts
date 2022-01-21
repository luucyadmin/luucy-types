declare namespace ui {
    /** 
     * Section 
     * 
     * As used in panels, compareable to "Data & usage", "Compare variants", ...
     * 
     * @example // Creating a section with a label, adding it to the left panel
     * const appSection = ui.createProjectPanelSection();
     * 
     * const section = new ui.Section("Test Section");
     * appSection.add(section);
     * 
     * const label = new ui.Label("Test Label");
     * section.add(label);
     */
    class Section extends Element implements ElementContainer {
        /** 
         * Creates a section 
         * 
         * @param name - Name of the section. Can't be changed after creating the section.
         */
        constructor(name: string);

        /**
         * Adds an action button to the title of the section
         * 
         * @example // Create a section action
         * section.createAction(ui.icons.calendar, "Calendar", () = > {
         *     console.log("show some calendar!")
         * });
         */
        createAction(icon: IconElement, name: string, action: () => void): void;

        readonly children: Element[];
        add(element: Element): void;
        insertAfter(child: Element, after: Element): void;
        insertBefore(child: Element, before: Element): void;
        remove(child: Element): void;
    }
}