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
         * Whether the panel stays open when a shape gets selected (e.g. a newly created one) or the map is clicked.
         *
         * - `true` (default): the panel stays open.
         * - `false`: the panel behaves like the built-in side panels: it is replaced by the shape properties panel when a shape is selected, and closed when an empty spot on the map is clicked.
         *
         * Can be changed while the panel is open; the change applies immediately.
         *
         * @default true
         *
         * @example
         * const panel = new ui.Panel("My Panel");
         * panel.permanent = false;
         * panel.open();
         */
        permanent: boolean;

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