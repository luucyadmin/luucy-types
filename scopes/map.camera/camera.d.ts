declare namespace map.camera {
    /**
     * Map Camera
     * 
     * Obtain the current camera by using `map.camera.getCurrentCamera()`.
     * Apply the camera by using `map.camera.focus(camera)`.
     */
    class Camera {
        /**
         * X coordinate of the camera position
         */
        x: number;

        /**
         * Y coordinate of the camera position
         */
        y: number;

        /**
         * Z coordinate (height) of the camera position
         */
        z: number;

        /**
         * Heading (yaw) of the camera in radian
         */
        heading: number;

        /**
         * Pitch of the camera in radian
         */
        pitch: number;

        /**
         * Roll of the camera in radian
         */
        roll: number;

        /**
         * Creates a new camera with the given position and orientation
         */
        constructor(x: number, y: number, z: number, heading: number, pitch: number, roll: number);
    }
}