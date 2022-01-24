declare namespace ui {
    /**
     * General actions used in sections and columns
     * 
     * @example // actions
     * const section = new ui.Section('Test');
     * section.addAction(ui.icons.view, 'View More', () => console.log('do something'));
     */
    class Action<T = void> {
        /**
         * The actions icon
         * 
         * This cannot be changed after the action was created
         */
        readonly icon?: IconElement;

        /**
         * The actions name
         * 
         * This cannot be changed after the action was created
         */
        readonly name: string;

        constructor(name: string, handler: (item: T) => void);
        constructor(icon: IconElement, name: string, handler: (item: T) => void);

        /**
         * Execute the handler
         */
        dispatch(item: T): void;
    }
}