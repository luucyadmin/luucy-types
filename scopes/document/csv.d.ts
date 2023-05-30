declare namespace document {
  /**
   * CSV
   *
   * Provide methods to create CSV file from ui.Table data
   */
  class CSV {
    /**
     * Creates a CSV file from given table
     * It uses the raw value from Record's data array
     *
     * @param name filename (if not provided the .csv suffix will be added)
     * @param data table data hodling the values for generate CSV
     * @param addHeader (default false) flag if the header of the table should be added to result CSV file
     * @param delimiter (default , ) CSV delimiter character
     *
     * @example // Create an .csv file and download it
     * const tableMulti = new ui.Table([],[new ui.Column("item", item => item.name), new ui.Column("cost", item => item.cost)]);
     * tableMulti.setRecords([{name: 'tomato', cost: 30},{name: 'apple', cost: 25},{name: 'bun', cost: 5}]);
     *
     * const csvFile = document.CSV.generateCSV("test", tableMulti);
     *
     * section.add(new ui.Button(ui.icons.export, "Download CSV", () => {
     *     csvFile.download();
     * }));
     */
    static generateCSV(
      name: string,
      data: ui.Table<ui.Record<any>>,
      addHeader?: boolean,
      delimiter?: string
    ): File;
  }
}
