declare namespace map.location {
    /**
     * The current center of the map
     */
    const center: GlobalPosition;

    /**
     * The current bounding box of the map
     */
    const boundingBox: { topLeft: GlobalPosition, bottomRight: GlobalPosition };

    /**
     * Emits new center whenever the map moves around
     */
    const onCenterChange: Event<GlobalPosition, GlobalPosition | undefined>;

    /**
     * Emits a new bounding box whenever the map moves
     */
    const onBoundingBoxChange: Event<{ topLeft: GlobalPosition, bottomRight: GlobalPosition }, { topLeft: GlobalPosition, bottomRight: GlobalPosition } | undefined>;
}