declare namespace ui {
    /** 
     * Remote Images 
     * 
     * Loads images from a remote server
     * 
     * @example // Loading a remote image
     * const image = new ui.Image("https://example.com/image");
     * 
     * section.add(image);
     */
    class Image extends Element {
        /**
         * Creates a remote image
         *
         * @param source URL of the image to load
         * @param tooltip Will provide a tooltip on mouseover
         */
        constructor(source?: string, tooltip?: string);

        /**
         * Images source URL
         * 
         * Can be changed after beeing added to an area/element and will automatically reload the image.
         */
        source: string;

        onSourceChange: Event<string, string | undefined>;
    }
}