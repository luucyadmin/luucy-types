declare namespace ui {
    /**
     * Modal 
     * 
     * Creates a modal. The modal will only be displayed when `.open()` is called. 
     * Do not automatically open a modal, wait for user input!
     * 
     * @example // Creating a modal and a button to open it
     * const modal = new ui.Modal("Test Modal");
     * const label = new ui.Label();
     * 
     * modal.add(label);
     * 
     * const button = new ui.Button(ui.icons.full, "Open Modal", () => {
     *     label.content = `Opened at: ${new Date().toString()}`;
     * 
     *     modal.open();
     * });
     */
     class Modal implements ElementContainer {
        /** 
         * Creates a modal
         * 
         * @param name - The modals name. Can't be changed after the modal has been created.
         */
        constructor(name: string);

        /**
         * Opens the modal window
         * 
         * Do not open the modal automatically! Please wait for user input, eg. a button press!
         * The modal can be closed programatically by calling `.close()`
         */
        open();

        /**
         * Closes the modal
         * 
         * The modal window can be opened again by calling `.open()`
         */
        close();

        readonly children: Element[];
        add(element: Element);
        insertAfter(child: Element, after: Element);
        insertBefore(child: Element, before: Element);
        remove(child: Element);
    }
}