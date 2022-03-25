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
    interface Panel extends ui.ElementContainer {
        onClose: Event<void>;
        close(): void;

        onMapClick: Event<GlobalPosition>;

        addAction(icon: IconElement, name: string, handler: () => void): void;
    }
}