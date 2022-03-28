/// <reference path="panel.d.ts" />
/// <reference path="tool.d.ts" />

declare namespace ui.tool {
    /**
     * Adds a button to the project tools
     * 
     * `render` is called when the user clicks on the tools button.
     * Elements can be added to panel.
     * Close the panel by calling `panel.close()`
     * 
     * @example // Create custom project tool panel
     * ui.tool.createProjectTool(ui.icons.account, 'Example Tool', panel => {
     *     panel.add(new ui.Label('Project Tool'));
     * });
     */
    function createProjectTool(icon: ui.IconElement, name: string, render: (panel: ui.tool.ToolPanel) => void): void;

    /**
     * Adds a button to the layer tools
     * 
     * `render` is called when the user clicks on the tools button.
     * Elements can be added to panel.
     * Close the panel by calling `panel.close()`
     * 
     * @example // Create custom layer tool panel
     * ui.tool.createLayerTool(ui.icons.account, 'Example Tool', panel => {
     *     panel.add(new ui.Label('Layer Tool'));
     * });
     */
    function createLayerTool(icon: ui.IconElement, name: string, render: (panel: ui.tool.ToolPanel) => void): void;

    /**
     * Adds a button to the export tools
     * 
     * `render` is called when the user clicks on the tools button.
     * Elements can be added to panel.
     * Close the panel by calling `panel.close()`
     * 
     * @example // Create custom export tool panel
     * ui.tool.createExportTool(ui.icons.account, 'Example Tool', panel => {
     *     panel.add(new ui.Label('Export Tool'));
     * });
     */
    function createExportTool(icon: ui.IconElement, name: string, render: (panel: ui.tool.ToolPanel) => void): void;

    /**
     * Adds a new modeling tool 
     * 
     * @example // Create custom project tool panel
     * ui.tool.createModelingTool(ui.icons.pointOfInterest, 'Draw Markers', tool => {
     *     const markers = [];
     *     const color = Color.random();
     *     
     *     tool.onMapClick.subscribe(position => {
     *         markers.push(new map.Marker(position.flattenedCopy(), color, `${markers.length + 1}`));
     *     
     *         // call complete when 5 markers have been added
     *         if (markers.length == 5) {
     *             tool.complete();
     *         }
     *     });
     *     
     *     // clean up the markers if the user aborts
     *     tool.onAbort.subscribe(() => {
     *         console.log('abort');
     * 
     *         for (let marker of markers) {
     *             marker.remove();
     *         }
     *     });
    });
     */
    function createModelingTool(icon: ui.IconElement, name: string, activate: (tool: ui.tool.ModelingTool) => void): void;
}