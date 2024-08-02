declare namespace ui {
    /**
     * LinkButton
     * 
     * LinkButtons have a label and will navigate to a URL when clicked.
     * They can also display an icon and handle various states such as disabled, primary, and loading.
     * 
     * @example // Creating a link button
     * // using URL directly
     * const linkButton = new ui.LinkButton("Open Luucy Homepage", "https://luucy.ch/");
     * 
     * // using icon and URL
     * const linkButton = new ui.LinkButton(ui.icons.link, "Open Luucy Homepage", "https://luucy.ch/");
     * 
     * section.add(linkButton);     
     */
    class LinkButton extends Element {
        /**
         * Creates a button which will open a link when clicked
         * 
         * The link may be provided as a string or as a handler that will be resolved when clicked.
         * A loading animation will be presented while the handler is being resolved.
         * 
         * @example // Show a link button
         * section.add(new ui.LinkButton('Open Luucy Homepage', 'https://luucy.ch/'));
         */
        constructor(label: string, url: string, tooltip?: string);
        constructor(icon: IconElement, label: string, url: string, tooltip?: string);

        /**
         * Link Buttons Text
         * 
         * Can be changed after being added to an area/element and will automatically update.
         */
        label: string;

        /**
         * Link
         * 
         * Can be changed after being added to an area/element and will automatically update.
         */
        url: string;

        /**
         * Link Buttons Icon
         * 
         * Can be changed after being added to an area/element and will automatically update.
         */
        icon?: IconElement;

        /**
         * If the link button is disabled, it is grayed out and will not navigate to the URL when clicked.
         * 
         * Can be changed after being added to an area/element and will automatically update.
         */
        disabled?: boolean;

        /**
         * If the link button is primary, it is visually highlighted.
         * 
         * There should only be one primary button per area/element.
         */
        primary?: boolean;

        /**
         * If the link button is loading, it shows a loading animation and will not navigate to the URL when clicked.
         * 
         * Can be changed after being added to an area/element and will automatically update.
         */
        loading?: boolean;

        /**
         * Event triggered when the link button's label changes.
         */
        onLabelChange: Event<string>;

        /**
         * Event triggered when the link button's URL changes.
         */
        onUrlChange: Event<string>;

        /**
         * Event triggered when the link button's icon changes.
         */
        onIconChange: Event<void>;

        /**
         * Event triggered when the link button's disabled state changes.
         */
        onDisabledChange: Event<void>;

        /**
         * Event triggered when the link button's primary state changes.
         */
        onPrimaryChange: Event<void>;

        /**
         * Event triggered when the link button's loading state changes.
         */
        onLoadingChange: Event<void>;
    }
}
