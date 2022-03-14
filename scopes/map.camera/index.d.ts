/// <reference path="camera.d.ts" />

declare namespace map.camera {
    /**
     * Returns the current camera perspective of the map.
     * 
     * Apply a camera by using `map.camera.focus(camera)`.
     */
    function getCurrentCamera(): Camera;

    /**
     * Moves the map to the camera.
     */
    function focus(camera: Camera): void;
}