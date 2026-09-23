declare namespace ui {
    /** 
     * Paragraph 
     * 
     * Displays a text paragraph with a margin at the end.
     * Privde a value to the `lines` argument to show a more button after the specified number of lines 
     * 
     * @example // Creating a "Lorem Ipsum" paragraph
     * const paragraph = new ui.Label("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus enim malesuada, hendrerit ex vel, gravida sem. Curabitur eget pretium leo. Vivamus orci dolor, consectetur non arcu at, elementum pharetra quam.");
     * section.add(paragraph);
     */
     class Paragraph extends Element {
        /**
         * Creates a paragraph
         *
         * @param content - The text to display
         * @param lines - Number of lines to display before showing a "more" button
         */
        constructor(content: string, lines?: number);

        /**
         * Paragraph content
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        content: string;

        /**
         * Set to true when the user clicked on 'more';
         */
        readonly expanded: boolean;

        /**
         * Number of visible lines
         */
        readonly lineLimit: number;

        /**
         * The event is triggered whenever the content changes
         */
        onContentChange: Event<string, string | undefined>;

        /**
         * The event is triggered whenever the user clicks 'more' to expand the paragraph
         */
        onExpand: Event<void>;
    }
}