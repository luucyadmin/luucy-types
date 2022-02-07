declare namespace ui {
    class Notification {
        constructor(
            title: string,
            content: string
        );

        addAction(icon: IconElement, name: string, action: () => void): this;

        show(): void;
        hide(): void;
    }
}