declare namespace presentation {
    class Presentation {
        /**
         * Contains all slides within the presentation
         */
        readonly slides: Slide[];

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