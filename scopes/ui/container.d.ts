declare namespace ui {
    /** 
     * Empty Container 
     * 
     * @example // Creating a label & button inside of the left panel
     * const container = new ui.Container();
     * section.add(container);
     * 
     * const label = new ui.Label("Test Label");
     * container.add(label);
     * 
     * const button = new ui.Button(ui.icons.play, "Test Button");
     * container.add(button);
     */
    class Container extends Element implements ElementContainer {
        /**
         * Creates an empty container
         */
        constructor();

        /**
         * Contains all child elements.
         *
         * Modify the children by using `add()`, `insertAfter()`, `insertBefore()` and `remove()`
         */
        readonly children: Element[];

        /**
         * Appends an element as a child
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

        /**
         * Emits when the visibility of the container changes
         */
        onVisibilityChange: Event<void>;

        /**
         * Emits when a child is added, removed or changed
         */
        onChildChange: Event<void>;
    }
}