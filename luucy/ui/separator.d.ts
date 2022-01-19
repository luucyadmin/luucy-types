declare namespace ui {
    /**
     * Separator
     * 
     * Splits content with a horizontal line, compareable to <hr>
     * 
     * @example // Separate two ares in a section
     * const section = new ui.Section("Important Details");
     * section.add(new ui.Label("Lorem"));
     * section.add(new ui.Separator());
     * section.add(new ui.Label("Ipsum"));
     */
    class Separator extends Element {}
}