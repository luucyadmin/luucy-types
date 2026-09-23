declare namespace ui {

    /**
     * Column Transformer
     *
     * Converts a record into the value to display within a column cell.
     */
    interface ColumnTransformer<T> {
        (item: T, rowIndex?: number, columnIndex?: number): string | number | Image | FieldElement | IconElement | Button;
    }

    /**
     * Column Tooltip Transformer
     *
     * Converts a record into the tooltip to display when hovering over a column cell.
     */
    interface ColumnTooltipTransformer<T> {
        (item: T, rowIndex?: number, columnIndex?: number): string | null;
    }

    /**
     * Column Action
     *
     * Describes an action button displayed within a column.
     */
    interface ColumnAction<T> {
        /** The icon displayed on the action button */
        icon: IconElement;
        /** The name of the action */
        name: string;
        /** Called whenever the action button is clicked */
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
        /**
         * Creates a column
         *
         * @param name - The name of the column, displayed in the header
         * @param transformer - Converts a record into the value to display in the column
         * @param options - Additional column options
         */
        constructor(name: string, transformer: ColumnTransformer<T>, options?: ColumnOptions<T>);

        /**
         * The name of the column
         */
        readonly name: string;

        /**
         * The options passed to the column
         */
        readonly options: ColumnOptions<T>;

        /**
         * Adds a tooltip transformer to the column
         */
        addTooltip(transformer: ColumnTooltipTransformer<T>): this;

        /**
         * Adds an action button to the column
         */
        addAction(icon: IconElement, name: string, onClick: (item: T) => void): this;

        /**
         * The unique id of the column
         */
        readonly id: string;

        /**
         * Returns the actions registered on the column
         */
        getActions(): Action<T>[];

        /**
         * Resolves the element to display for a given record within the column
         */
        resolve(item: T, rowIndex: number, columnIndex: number): Element;

        /**
         * Resolves the tooltip to display for a given record within the column
         */
        resolveTooltip(item: T, rowIndex: number, columnIndex: number): string | null;
    }
}