declare namespace ui {
    /** 
     * Vertical bar chart 
     * 
     * @example // Create a note
     * section.add(new ui.Note(ui.danger, "This did not go well!"));
     */
    class Note extends Element {
        /**
         * Creates a note
         *
         * @param state State of the note (e.g. `ui.danger`, `ui.success`)
         * @param message Message displayed in the note
         */
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

        /**
         * Emits when the message changes
         */
        onContentChange: Event<string, string | undefined>;

        /**
         * Emits when the state changes
         */
        onStateChange: Event<State, State | undefined>;
    }
}