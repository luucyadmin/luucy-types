declare namespace ui {
    /** 
     * Panel 
     * 
     * Creates a right panel. The panel will only be displayed when `.open()` is called. 
     * Do not automatically open a panels, wait for user input!
     * 
     * @example // Creating a panel and a button to open it
     * const panel = new ui.Panel("Test Panel");
     * const label = new ui.Label();
     * 
     * panel.add(label);
     * 
     * const button = new ui.Button(ui.icons.full, "Open Panel", () => {
     *     label.content = `Opened at: ${new Date().toString()}`;
     * 
     *     panel.open();
     * });
     */
    class Panel implements ElementContainer {
        /** 
         * Creates a panel 
         * 
         * @param name - The panels name. Can't be changed after the panel has been created.
         */
        constructor(name: string);

        /**
         * The panels name
         */
        readonly name: string;

        /**
         * Opens the panel
         * 
         * Do not open the panel automatically! Please wait for user input, eg. a button press!
         * The panel can be closed programatically by calling `.close()`
         */
        open(): void;

        /**
         * Closes the panel
         * 
         * The panel can be opened again by calling `.open()`
         */
        close(): void;

        /**
         * The panels children
         */
        readonly children: Element[];

        /**
         * Adds an element to the panel
         */
        add(element: Element): void;

        /**
         * Inserts an element into the panel right after another element
         */
        insertAfter(child: Element, after: Element): void;

        /**
         * Inserts an element into the panel right before another element
         */
        insertBefore(child: Element, before: Element): void;

        /**
         * Removes an element from the panel
         */
        remove(child: Element): void;

        /**
         * Removes all elements from the panel
         */
        removeAllChildren(): void;

        /**
         * The event is triggered whenever a child element is added, removed or changed
         */
        onChildChange: Event<void>;

        /**
         * The event is triggered whenever the panel is closed
         */
        onClose: Event<void>;
    }
}