declare namespace ui {

    interface ColumnTransformer<T> {
        (item: T, columnIndex?: number, rowIndex?: number): string | number | Image | FieldElement | IconElement | Button;
    }

    interface ColumnTooltipTransformer<T> {
        (item: T, columnIndex?: number, rowIndex?: number): string | null;
    }

    interface ColumnAction<T> {
        icon: IconElement;
        name: string;
        onClick: (item: T) => void;
    }

    /**
     * Table Column Options
     * 
     * Describes the options for a table column.
     */
    interface ColumnOptions<T> {
        /** The tooltip transformer generates a tooltip to be displayed when hovering over a cell. */ 
        tooltip?: ColumnTooltipTransformer<T>;
        /** The action is displayed as a button in the column. */
        actions?: ColumnAction<T>[];
        /** The width of the column. */
        width?: number | string;
        /** The minimum width of the column. */
        minWidth?: number | string;
        /** The maximum width of the column. */
        maxWidth?: number | string;
        /** The alignment of the column contents. */
        align?: "left" | "center" | "right";
        /** Whether the column should be sticky - i.e. stay displayed when scrolling vertically */
        sticky?: boolean;
        /** Whether the column should be sticky to end - i.e. stay displayed on the end of the row when scrolling vertically  */
        stickyEnd?: boolean;
    }

    /**
     * Table Column
     * 
     * Describes a column within a table.
     * The transformer will be called for every value in the records.
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
        constructor(name: string, transformer: ColumnTransformer<T>, options?: ColumnOptions<T>);

        readonly name: string;

        readonly options: ColumnOptions<T>;

        addTooltip(transformer: ColumnTooltipTransformer<T>): this;
        addAction(icon: IconElement, name: string, onClick: (item: T) => void): this;

        readonly id: string;
        getActions(): Action<T>[];
        resolve(item: T, columnIndex: number, rowIndex: number): Element;
        resolveTooltip(item: T, columnIndex: number, rowIndex: number): string | null;
    }
}