declare namespace ui {
    /**
     * Table Column
     * 
     * Describes a column within a table.
     * The transformer will be called for every value in the recods.
     * 
     * You can return a string, number, Images, Fields, Icons and Buttons!
     * 
     * @example // Create a table with an image, tooltips and actions
     * new ui.Table<Building>(buildings, [
     *     new ui.Column("Image", building => new ui.Image(building.imageUrl)),
     *     new ui.Column("Name", building => building.name),
     *     new ui.Column<Building>("Year", building => building.builtAt.getFullYear()).addTooltip(building => building.builtAt.toLocalDateString()),
     * 
     *     // add a report column with an action, which, when clicked, will open a modal
     *     new ui.Column<Building>("Report", building.lastReport.name).addAction(ui.icons.file, "View Report", building => {
     *         const modal = new ui.Modal();
     *         // add whatever needs to be added to your modal!
     * 
     *         modal.show();
     *     })
     * ])
     */
    class Column<T> {
        constructor(name: string, transformer: (item: T, index: number) => string | number | Image | FieldElement | IconElement | Button);

        readonly name: string;

        addTooltip(transformer: (item: T, index: number) => string): this;
        addAction(icon: IconElement, name: string, onClick: (item: T) => void): this;

        readonly id: string;
        getActions(): Action<T>[];
        resolve(item: T, index: number): Element;
        resolveTooltip(item: T, index: number): string | null;
        /**
         * Resolve record value on given index by trying to convert it to simple string
         * @param item record
         * @param index column index
         */
        resolveValue(item: T, index: number): Element;
    }
}