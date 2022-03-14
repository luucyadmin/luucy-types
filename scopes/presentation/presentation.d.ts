declare namespace presentation {
    class Presentation {
        /**
         * Id of the presentation */
        readonly id: number;

        /**
         * Name of the presentation
         */
        readonly name: string;

        /**
         * Custom storage bound to the presentation.
         * 
         * Slides have storage containers too
         */
        readonly storage: StorageRouter;

        /**
         * Called when a slide is opened.
         */
        onSlideOpen: Event<Slide>;
    }
}