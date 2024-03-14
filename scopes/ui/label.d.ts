declare namespace ui {
    /** 
     * Label 
     * 
     * Displays a text. 
     * Use `LabeledValue` if you want to display a value on the right of a label.
     * Use `Paragraph` if you want a margin after the text
     * 
     * @example // Creating a "Hello World" label
     * const label = new ui.Label("Hello World!");
     * 
     * section.add(label);
     * 
     * @example // Creating a timer
     * const label = new ui.Label("");
     * section.add(label);
     * 
     * Timer.interval(index => {
     *     label.content = `${index}s elapsed`;
     * }, 1000);
     */
    class Label extends Element {
        constructor(content: string, help?: string);

        /**
         * Labels content
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        content: string;

        onContentChange: Event<string>;
    }
}