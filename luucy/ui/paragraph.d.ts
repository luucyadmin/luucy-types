declare namespace ui {
    /** 
     * Paragraph 
     * 
     * Displays a text paragraph with a margin at the end. 
     * 
     * @example // Creating a "Lorem Ipsum" paragraph
     * const paragraph = new ui.Label("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus enim malesuada, hendrerit ex vel, gravida sem. Curabitur eget pretium leo. Vivamus orci dolor, consectetur non arcu at, elementum pharetra quam.");
     * section.add(paragraph);
     */
     class Paragraph extends Element {
        constructor(content: string);

        /**
         * Paragraph content
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        content: string;

        onContentChange: Event<string>;
    }
}