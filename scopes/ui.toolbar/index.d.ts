declare namespace ui.toolbar {
    interface Panel extends ui.ElementContainer {
        close(): void;
    }

    /**
     * Adds a button to the project tools
     * 
     * @example // Create custom project tool panel
     * ui.toolbar.createProjectTool(ui.icons.account, 'Example Tool', (panel) => {
     *     panel.add(new ui.Label('Project Tool'));
     * });
     */
    function createProjectTool(icon: ui.IconElement, name: string, onOpen: (panel: ui.toolbar.Panel) => void): void;

    /**
     * Adds a button to the layer tools
     * 
     * @example // Create custom project tool panel
     * ui.toolbar.createLayerTool(ui.icons.account, 'Example Tool', (panel) => {
     *     panel.add(new ui.Label('Layer Tool'));
     * });
     */
    function createLayerTool(icon: ui.IconElement, name: string, onOpen: (panel: ui.toolbar.Panel) => void): void;

    /**
     * Adds a button to the export tools
     * 
     * @example // Create custom project tool panel
     * ui.toolbar.createExportTool(ui.icons.account, 'Example Tool', (panel) => {
     *     panel.add(new ui.Label('Export Tool'));
     * });
     */
    function createExportTool(icon: ui.IconElement, name: string, onOpen: (panel: ui.toolbar.Panel) => void): void;

    /**
     * Adds a new modeling tool button
     * 
     * Call `complete()` when your tool is done.
     * This will close the panel and detach the onClick listener.
     * 
     * onAbort will be called when the tool is closed by clicking on the icon.
     * Remove and modifications made to the map!
     * 
     * onClick will be called when the user clicks on the map.
     * 
     * @example // Create custom project tool panel
     * ui.toolbar.createProjectTool(ui.icons.account, 'Example Tool', (panel, complete, abort, click) => {
     *     panel.add(new ui.Label('Create markers by clicking on the map'));
     * 
     *     const markers = [];
     * 
     *     click.subscribe(position => {
     *         markers.push(new map.Maker(position));
     * 
     *         // call complete when 5 markers have been added
     *         if (markers.length == 5) {
     *             complete();
     *         }
     *     });
     * 
     *     abort.subscribe(() => {
     *         for (let marker of markers) {
     *             marker.remove();
     *         }
     *     });
     * });
     */
    function createModelingTool(icon: ui.IconElement, name: string, onOpen: (panel: ui.ElementContainer, complete: () => void, onAbort: Event<void>, onClick: Event<GlobalPosition>) => void): void;
}