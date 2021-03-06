declare namespace ui {
    interface ElementContainer {
        /** 
         * Contains all child elements. 
         * 
         * Modify the children by using `add()`, `insertAfter()`, `insertBefore()` and `remove()`
         */
        readonly children: Element[];

        /** 
         * Appends an element as a child 
         * 
         * @example // Creating a section and adding a label to it
         * const section = ui.createProjectPanelSection();
         * 
         * const label = new ui.Label("Hello World");
         * section.add(label);
         */
        add(element: Element): void;

        /** 
         * Appends an element as a child after the reference element 
         */
        insertAfter(child: Element, after: Element): void;

        /** 
         * Appends an element as a child before the reference element 
         */
        insertBefore(child: Element, before: Element): void;

        /** 
         * Removes an element as a child 
         */
        remove(child: Element): void;

        /**
         * Removes all children
         */
        removeAllChildren(): void;

        onChildChange: Event<void>;
    }
}