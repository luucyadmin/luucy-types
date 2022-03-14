/// <reference path="../ui/index.d.ts" />
/// <reference path="../presentation/index.d.ts" />

declare namespace presentation {
    /**
     * Creates a panel for presentations
     * 
     * A button with the provided icon will be visible next to the book icon. 
     * The render function will be called whenever the slides change and a empty container will be provided.
     */
    function createPanel(icon: string, name: string, render: (container: ui.ElementContainer, slide: Slide) => void): void;
}