declare namespace ui {
    /** 
     * Vertical bar chart 
     * 
     * @example // Create a note
     * section.add(new ui.Note(ui.danger, "This did not go well!"));
     */
    class Note extends Element {
        constructor(state: State, message: string);

        /**
         * Defines the Notes state
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         * 
         * @example // Change a notes state
         * const note = new ui.Note(ui.danger, 'Example Note');
         * section.add(note);
         * 
         * section.add(new ui.Button('change note state!', () => {
         *     note.state = ui.success;
         * }));
         */
        state: State;

        /**
         * Defines the Notes state
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        message: string;

        onContentChange: Event<string>;
    }
}