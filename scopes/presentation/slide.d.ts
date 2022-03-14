declare namespace presentation {
    class Slide {
        /**
         * Id of the slide
         */
        readonly id: number;

        /**
         * Contains the slides numerical index
         */
        readonly index: number;

        /**
         * Contains user defined, attributed free text
         */
        readonly content: string;

        /**
         * The slides default camera
         */
        readonly camera: map.camera.Camera;

        /**
         * A slide-specific storage container
         */
        readonly storage: StorageRouter;
    }
}