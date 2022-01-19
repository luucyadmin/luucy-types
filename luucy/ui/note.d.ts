declare namespace ui {
    /** 
     * Vertical bar chart 
     * 
     * @example // Create a note
     * section.add(new ui.Note(ui.danger, "This did not go well!"));
     */
    class Note extends Element {
        constructor(state: State, message?: string);
    }
}