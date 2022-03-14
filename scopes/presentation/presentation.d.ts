declare namespace presentation {
    class Presentation {
        readonly slides: Slide[];

        onSlideOpen: Event<Slide>;

        addSlide(camera: map.camera.Camera, content: string): Slide;
    }
}