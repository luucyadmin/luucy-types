declare namespace map.location {
    /**
     * Emits new center whenever the map moves around
     */
    const onCenterChange: Event<GlobalPosition>;

    /**
     * Emits a new bounding box whenever the map moves
     */
    const onBoundingBoxChange: Event<{ topLeft: GlobalPosition, bottomRight: GlobalPosition }>;
}