declare namespace ui.toolbar {
    /**
     * Toolbar Panel
     * 
     * @example // Create Marker Panel
     * ui.toolbar.createProjectTool(ui.icons.pointOfInterest, 'Project', panel => {
     *     const markers: map.Marker[] = [];
     * 
     *     panel.add(new ui.Label('Click on the map to add markers'));
     * 
     *     panel.onMapClick.subscribe(position => {
     *         markers.push(new map.Marker(position.flattenedCopy()));
     *     });
     * 
     *     panel.onClose.subscribe(() => {
     *         for (let marker of markers) {
     *             marker.remove();
     *         }
     *     });
     * 
     *     panel.addAction(ui.icons.center, 'Center Points', () => {
     *         map.focus(markers);
     *     });
     * });
     */
    interface Panel extends ui.ElementContainer {
        onClose: Event<void>;
        close(): void;

        onMapClick: Event<GlobalPosition>;

        addAction(icon: IconElement, name: string, handler: () => void): void;
    }

    /**
     * Adds a button to the project tools
     * 
     * `render` is called when the user clicks on the tools button.
     * Elements can be added to panel.
     * Close the panel by calling `panel.close()`
     * 
     * @example // Create custom project tool panel
     * ui.toolbar.createProjectTool(ui.icons.account, 'Example Tool', panel => {
     *     panel.add(new ui.Label('Project Tool'));
     * });
     */
    function createProjectTool(icon: ui.IconElement, name: string, render: (panel: ui.toolbar.Panel) => void): void;

    /**
     * Adds a button to the layer tools
     * 
     * `render` is called when the user clicks on the tools button.
     * Elements can be added to panel.
     * Close the panel by calling `panel.close()`
     * 
     * @example // Create custom project tool panel
     * ui.toolbar.createLayerTool(ui.icons.account, 'Example Tool', panel => {
     *     panel.add(new ui.Label('Layer Tool'));
     * });
     */
    function createLayerTool(icon: ui.IconElement, name: string, render: (panel: ui.toolbar.Panel) => void): void;

    /**
     * Adds a button to the export tools
     * 
     * `render` is called when the user clicks on the tools button.
     * Elements can be added to panel.
     * Close the panel by calling `panel.close()`
     * 
     * @example // Create custom project tool panel
     * ui.toolbar.createExportTool(ui.icons.account, 'Example Tool', panel => {
     *     panel.add(new ui.Label('Export Tool'));
     * });
     */
    function createExportTool(icon: ui.IconElement, name: string, render: (panel: ui.toolbar.Panel) => void): void;

    /**
     * Adds a new modeling tool button
     * 
     * Call `panel.close()` when your tool is done.
     * 
     * @example // Create custom project tool panel
     * ui.toolbar.createProjectTool(ui.icons.account, 'Example Tool', panel => {
     *     panel.add(new ui.Label('Create markers by clicking on the map'));
     * 
     *     const markers = [];
     * 
     *     panel.onMapClick.subscribe(position => {
     *         markers.push(new map.Maker(position));
     * 
     *         // call complete when 5 markers have been added
     *         if (markers.length == 5) {
     *             complete();
     *         }
     *     });
     * 
     *     // clean up the markers
     *     panel.onClose.subscribe(() => {
     *         for (let marker of markers) {
     *             marker.remove();
     *         }
     *     });
     * });
     */
    function createModelingTool(icon: ui.IconElement, name: string, onOpen: (panel: ui.toolbar.Panel) => void): void;
}