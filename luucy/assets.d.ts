/** 
 * Asset Management
 * 
 * Resolves assets to urls.
 */
 declare const Assets: {
    /** 
     * Returns the default icon of you application, usually icon.svg 
     */
    getLogo();

    /** 
     * Returns an URL pointing to your ressource from the assets directory
     * 
     * @example // Display an image
     * // Make sure to place `test.png` in your assets directory!
     * const url = Assets.resolveUrl('test.png');
     * const image = new ui.Image(url);
     * 
     * section.add(image);
     */
    resolveUrl(path: string);
}