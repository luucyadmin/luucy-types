declare namespace ui {

    interface ColumnTransformer<T> {
        (item: T, columnIndex?: number, rowIndex?: number): string | number | Image | FieldElement | IconElement | Button;
    }

    interface ColumnTooltipTransformer<T> {
        (item: T, columnIndex?: number, rowIndex?: number): string | null;
    }

    /**
     * Table Column
     * 
     * Describes a column within a table.
     * The transformer will be called for every value in the recods.
     * You can use the rowIndex to transform row values within the column.
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
        constructor(name: string, transformer: ColumnTransformer<T>);

        readonly name: string;

        addTooltip(transformer: ColumnTooltipTransformer<T>): this;
        addAction(icon: IconElement, name: string, onClick: (item: T) => void): this;

        readonly id: string;
        getActions(): Action<T>[];
        resolve(item: T, columnIndex: number, rowIndex: number): Element;
        resolveTooltip(item: T, columnIndex: number, rowIndex: number): string | null;
    }
}