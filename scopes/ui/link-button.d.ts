declare namespace ui {
    class LinkButton extends Element {
        /**
         * Creates a button which will open a link when clicked
         * 
         * The link may be provided as a string or as a handler that will be resolved when clicked.
         * A loading animation will be presented while the handler is beeing resolved
         * 
         * @example // Show a link button
         * section.add(new ui.LinkButton('Open Luucy Homepage', 'https://luucy.ch/'));
         */
        constructor(label: string, url: string, tooltip?: string);

        /**
         * Link Buttons Text
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * Link
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        url: string;

        onLabelChange: Event<string>;
        onUrlChange: Event<string>;
    }
}