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
        constructor(source?: string);

        /**
         * Images source URL
         * 
         * Can be changed after beeing added to an area/element and will automatically reload the image.
         */
        source: string;
    }
}