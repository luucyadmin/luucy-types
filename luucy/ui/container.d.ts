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
        constructor();

        readonly children: Element[];
        add(element: Element);
        insertAfter(child: Element, after: Element);
        insertBefore(child: Element, before: Element);
        remove(child: Element);
    }
}