/// <reference path="../map.camera/camera.d.ts" />

declare namespace map.liveCamera {
    /**
     * Fires whenever a live camera command from another connected session (e.g. a companion app)
     * is applied to the map.
     */
    const onCameraChange: Event<map.camera.Camera>;
}
