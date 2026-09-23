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
        /**
         * Creates a notification
         *
         * @param state State of the notification (e.g. `ui.danger`, `ui.success`)
         * @param title Title displayed in the notification
         * @param content Optional content text displayed below the title
         */
        constructor(state: State, title: string, content?: string);

        /**
         * State of the notification
         */
        readonly state: State;

        /**
         * Title of the notification
         */
        readonly title: string;

        /**
         * Content text of the notification
         */
        readonly content: string;

        /**
         * Adds an action to the notification
         */
        addAction(icon: IconElement, name: string, action: () => void): this;

        /**
         * Shows the notification.
         * 
         * Set `keepOpen` to true to keep the notification open until calling `.hide()`
         *
         * Use `.hide()` to close the notification.
         */
        show(keepOpen: boolean): void;

        /**
         * Hides the notification
         * 
         * Use `.show()` to show it again.
         */
        hide(): void;
    }
}