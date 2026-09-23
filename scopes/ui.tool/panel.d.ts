declare namespace ui.tool {
    /**
     * Toolbar Panel
     * 
     * @example // Create Marker Panel
     * ui.tool.createProjectTool(ui.icons.pointOfInterest, 'Project', panel => {
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
    interface ToolPanel extends ui.ElementContainer {
        /**
         * Emits when the panel is closed
         */
        onClose: Event<void>;

        /**
         * Closes the panel
         */
        close(): void;

        /**
         * Emits when the user clicks on the map while the panel is open
         */
        onMapClick: Event<GlobalPosition, GlobalPosition | undefined>;

        /**
         * Adds an action button to the panel
         */
        addAction(icon: IconElement, name: string, handler: () => void): void;
    }
}