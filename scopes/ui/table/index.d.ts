/// <reference path="column.d.ts" />
/// <reference path="record.d.ts" />

declare namespace ui {
    class Table<T> extends Element {
        constructor(records: T[], columns: ui.Column<Exclude<T, null>>[]);

        /**
         * This event is triggered whenever records are added, removed or overwritten using `setRecords`
         */
        onRecordsChange: Event<void>;

        /**
         * This event is triggered whenever a new column is added, or an existing column was removed.
         */
        onColumnsChange: Event<void>;

        /**
         * Creates a new column
         * 
         * @example // Creating a new column after creating a table
         * const table = new ui.Table<Building>(buildings, [
         *      new ui.Column("Name", building => building.name)
         * ]);
         * 
         * const column = table.addColumn("Year", building => building.year);
         */
        addColumn(name: string, transformer: (item: T, index: number) => string | number | Image | FieldElement | IconElement | Button): Column<T>;

        /**
         * Removes a column from the table
         */
        removeColumn(column: Column<T>): void;

        /**
         * Add a record to the table
         * 
         * Avoid calling this method in a loop (`for`, `while`, ...) as it will re-render the whole table on each call. 
         * Batch your changes and use `table.setRecords` instead or use one call (`table.addRecord(stephan, lukas, felix)`)!
         * 
         * @example // Adding a record to a table
         * interface Building {
         *     name: string;
         * }
         * 
         * const buildings: Building[] = [
         *     { name: "Zürich Main Station" },
         *     { name: "Rathausbrücke" }
         * ];
         * 
         * const table = new ui.Table<Building>(buildings, [
         *      new ui.Column("Name", building => building.name)
         * ]);
         * 
         * section.add(table);
         * 
         * section.add(new ui.Button("Add Lucerene Main Station", () => {
         *     const lucerneMainStation: Building = { name: "Lucerne Main Station" };
         *     
         *     table.addRecord(lucerneMainStation);
         * }));
         */
        addRecord(...records: T[]): void;

        /**
         * Remove a record from a table
         * 
         * Avoid calling this method in a loop (`for`, `while`, ...) as it will re-render the whole table on each call. 
         * Batch your changes and use `table.setRecords` instead or use one call (`table.removeRecord(stephan, lukas, felix)`)!
         * 
         * @example // Removing a record from a table
         * interface Person {
         *     name: string;
         * }
         * 
         * const people: Person[] = [
         *     { name: "Stephan" },
         *     { name: "Lukas" }
         * ];
         * 
         * const table = new ui.Table<Person>(people, [
         *     new ui.Column("Name", person => person.name)
         * ]);
         * 
         * section.add(table);
         * 
         * section.add(new ui.Button("Remove Lukas", () => {
         *     const lukas = people.find(person => person.name == "Lukas");
         *     
         *     table.removeRecord(lukas);
         * }));
         */
        removeRecord(...record: T[]): void;

        /**
         * Overwrites the records currently displayed in the table
         * 
         * @example // Add 100 records at once
         * const pis = [
         *     Math.PI / 100,
         *     Math.PI / 100 * 2
         * ];
         * 
         * const table = new ui.Table<number>(pis, [
         *     new ui.Column("Value", value => value)
         * ]);
         * 
         * section.add(table);
         * 
         * section.add(new ui.Button("Add More PIs", () => {
         *     const newPiValues = [];
         * 
         *     for (let i = 0; i < Math.PI; i += Math.PI / 100) {
         *         newPiValues.push(i);
         *     }
         *     
         *     table.setRecords(newPiValues);
         * }));
         */
        setRecords(records: T[]): void;

        /**
         * Returns a copy of the active records
         */
        getRecords(): T[];

        /**
         * Returns a copy of the columns
         */
        getColumns(): Column<T>[];
    }
}