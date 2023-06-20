declare namespace document {
  /**
   * CSV
   *
   * Provide methods to create CSV file from ui.Table data
   */
  class CSV {
    /**
     * Creates a CSV file from given 2-dimensional array
     *
     * @param name filename (if not provided the .csv suffix will be added)
     * @param data data hodling the values for generate CSV
     * @param addHeader (default false) flag if the first row of the data is a header row (aca column names) and should be skipped in result CSV file
     * @param delimiter (default , ) CSV delimiter character
     *
     * @example // Create an .csv file and download it
     *  const columns = [
     *       new ui.Column<ui.Record>("item", (item) => item.label),
     *       new ui.Column<ui.Record>("price NZD", (item, index) =>
     *         item.format(item.data[index])),
     *       new ui.Column<ui.Record>("price USD", (item, index) =>
     *         item.format(item.data[index])),
     *     ];
     *
     *  const records: ui.Record[] = [
     *       new ui.Record("Apple", [10.23, 15.44], (value: number) =>  value.toFixed(1)),
     *       new ui.Record("Banana", [20.13, 25.67], (value: number) => value.toFixed(1)),
     *     ];
     * const table = new ui.Table<ui.Record>(records, columns);
     *
     * const csvFile = document.CSV.generateCSV("fruit_prices", table);
     *
     * section.add(new ui.Button(ui.icons.export, "Download CSV", () => {
     *     csvFile.download();
     * }));
     */
    static generateCSV(
      name: string,
      data: [][],
      addHeader?: boolean,
      delimiter?: string
    ): File;
  }
}