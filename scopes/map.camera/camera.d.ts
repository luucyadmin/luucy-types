declare namespace map.camera {
    /**
     * Map Camera
     * 
     * Obtain the current camera by using `map.camera.getCurrentCamera()`.
     * Apply the camera by using `map.camera.focus(camera)`.
     */
    class Camera {
        x: number;
        y: number;
        z: number;

        heading: number;
        pitch: number;
        roll: number;

        constructor(x: number, y: number, z: number, heading: number, pitch: number, roll: number);
    }
}