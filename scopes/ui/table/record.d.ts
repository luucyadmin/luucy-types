declare namespace ui {
  /**
   * Table Record
   *
   * Describes a record as a row in a table.
   * This is the required type of table's records if you want to use a CSV export functionality.
   *
   * The transformer will be called for every value in the records.
   *
   *
   * @example // Create a table with an image, tooltips and actions
   *
   *  const buildings = await data.selectedProject.selectedVariant.buildings;
   *  const records: ui.Record[] = [
   * { label: "volume", data: buildings.map((b) => b.volume.total), format: (value) => value.toMetricVolumeString() },
   * { label: "area", data: buildings.map((b) => b.floorArea.total), format: (value) => value.toMetricAreaString() }];
   *
   * new ui.Table<Record>(records, [
   *     new ui.Column<ui.Record>("Name", record => record.label),
   *     new ui.Column<ui.Record>("Cost", (record) => record.format(data[1]))
   * ]);
   */
  class Record {
    constructor(label: string, data: [any], format: (item: any) => string);

    readonly label: string;
    readonly data: any[];
    format(item: any): string;
  }
}
