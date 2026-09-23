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
         * @param name - Name of the section. 
         */
        constructor(name: string);

        /**
         * The sections name
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        name: string;

        /**
         * Adds an action button to the title of the section
         * 
         * @example // Create a section action
         * section.createAction(ui.icons.calendar, "Calendar", () = > {
         *     console.log("show some calendar!")
         * });
         */
        createAction(icon: IconElement, name: string, action: () => void): void;

        /**
         * Contains all actions
         * 
         * Changing this array will not update the visible actions, use `.createAction()` instead!
         */
        actions: Action[];

        /**
         * The sections children
         */
        readonly children: Element[];

        /**
         * Adds an element to the section
         */
        add(element: Element): void;

        /**
         * Inserts an element into the section right after another element
         */
        insertAfter(child: Element, after: Element): void;

        /**
         * Inserts an element into the section right before another element
         */
        insertBefore(child: Element, before: Element): void;

        /**
         * Removes an element from the section
         */
        remove(child: Element): void;

        /**
         * Removes all elements from the section
         */
        removeAllChildren(): void;

        /**
         * The event is triggered whenever the sections content changes
         */
        onContentChange: Event<void>;

        /**
         * The event is triggered whenever the sections actions change
         */
        onActionsChange: Event<void>;

        /**
         * The event is triggered whenever the sections visibility changes
         */
        onVisibilityChange: Event<void>;

        /**
         * The event is triggered whenever a child element is added, removed or changed
         */
        onChildChange: Event<void>;
    }
}