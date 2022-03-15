/// <reference path="presentation.d.ts" />
/// <reference path="slide.d.ts" />

declare namespace presentation {
    /**
     * Called when a presentation is openend
     */
    const onPresentationOpen: Event<Presentation | null>;

    /**
     * Currently selected presentation
     * 
     * Try to use `onPresentationOpen`, as it will update when the user selects another presentation
     */
    const selectedPresentation: Presentation | null;
}