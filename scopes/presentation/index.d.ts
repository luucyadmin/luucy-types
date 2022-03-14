/// <reference path="presentation.d.ts" />
/// <reference path="slide.d.ts" />

declare namespace presentation {
    /**
     * Called when a presentation is openend
     */
    const onPresentationOpen: Event<Presentation | null>;
}