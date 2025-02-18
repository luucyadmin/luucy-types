/** 
 * Asset Management
 * 
 * Resolves assets to urls.
 */
 declare class Assets {
    /** 
     * Returns the path to your application icon
     */
    static getLogo(): string;

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
    static resolveUrl(path: string): string;
}