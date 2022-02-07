declare namespace ui {
    /**
     * Global Notifications
     * 
     * Shows a global notification in the top right corner of luucy. 
     * Only one notification can be shown at once and other plugins or luucy itself may replace your notification!
     * 
     * @example // Show notification with two actions
     * const notification = new ui.Notification(ui.danger, 'Hey!', 'Checking out notifications?');
     * notification.addAction(ui.icons.check, 'Yes', () => console.log(true));
     * notification.addAction(ui.icons.cross, 'No', () => console.log(false));
     * 
     * notification.show();
     */
    class Notification {
        constructor(state: State, title: string, content?: string);

        readonly state: State;
        readonly title: string;
        readonly content: string;

        /**
         * Adds an action to the notification
         */
        addAction(icon: IconElement, name: string, action: () => void): this;

        /**
         * Shows the notification.
         *
         * Use `.hide()` to close the notification.
         */
        show(): void;

        /**
         * Hides the notification
         * 
         * Use `.show()` to show it again.
         */
        hide(): void;
    }
}