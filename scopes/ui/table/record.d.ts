declare namespace ui {
  /**
   * Table Record
   *
   * Describes a record as a row in a table.
   * This is the required type of table's records if you want to use a CSV export functionality.
   *
   * The CSV will use the raw data from the data attribute.
   * 
   * The format method can be used to provide resolver for columns -> to enhance UI experience
   *
   *
   * @example // Create a table with an image, tooltips and actions
   *
   *  const columns = [
   *       new ui.Column<ui.Record>("item", (item) => item.label),
   *       new ui.Column<ui.Record>("price NZD", (item) =>  item.format(item.data[0])),
   *       new ui.Column<ui.Record>("price USD", (item) =>  item.format(item.data[1])),
   *     ];
   *
   *  const records: ui.Record[] = [
   *       new ui.Record("Apple", [10.23, 15.44], (value: number) =>  value.toFixed(1)),
   *       new ui.Record("Banana", [20.13, 25.67], (value: number) => value.toFixed(1)),
   *     ];
   * const tableMulti = new ui.Table<ui.Record>(records, columns);
   */
  class Record {
    constructor(label: string, data: any[], format: (item: any) => string);

    readonly label: string;
    readonly data: any[];
    format(item: any): string;
  }
}
