declare namespace ui {
  /**
   * Table Record
   *
   * Describes a record as a row in a table.
   * Thisis the required type of record if you want to use a CSV export functionality.
   *
   * The transformer will be called for every value in the recods.
   *
   * You can return a string, number, Images, Fields, Icons and Buttons!
   *
   * @example // Create a table with an image, tooltips and actions
   *
   *
   *   const records: Record[] = [
   * { label: "volume", data: buildings.map((b) => b.volume.total), format: (value) => value.toMetricVolumeString() },
   * { label: "area", data: buildings.map((b) => b.floorArea.total), format: (value) => value.toMetricAreaString() }];
   *
   * new ui.Table<Record>(records, [
   *     new ui.Column<Record>("Name", record => record.label),
   *     new ui.Column<Record>("Cost", (item) => item.data[index])
   * ]);
   */
  class Record<T> {
    constructor(label: string, data: [T], format: (item: T) => string);

    readonly label: string;
    readonly data: [T];
  }
}
