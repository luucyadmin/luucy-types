declare namespace ui {
    /** 
     * Code 
     * 
     * Displays a monospaced text paragraph. 
     * Newllines and double spaces will not be truncated, the text is renderet as is (like <pre>).
     * Overflow will display scrollbars.
     * 
     * @example // Creating a code block containing pi
     * const code = new ui.Code("3.141592653589793238462643383279502884197169");
     * section.add(code);
     */
     class Code extends Element {
        constructor(content: string);

        /**
         * Code content
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        content: string;
    }
}