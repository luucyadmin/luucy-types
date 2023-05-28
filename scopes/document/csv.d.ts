declare namespace document {
  /**
   * CSV
   *
   * Provide methods to create CSV file from ui.Table data
   */
  class CSV {
    /**
     * Creates a CSV file from given table
     *
     * @param name filename (if not provided the .csv suffix will be added)
     * @param data table data hodling the values for generate CSV
     * @param delimiter (default , ) CSV delimiter character
     * @param addHeader (default false) flag if the header of the table should be added to result CSV file
     *
     * @example // Create an .csv file and download it
     * const tableMulti = new ui.Table([],[new ui.Column("item", item => item.name), new ui.Column("cost", item => item.cost)]);
     * tableMulti.setRecords([{name: 'tomato', cost: 30},{name: 'apple', cost: 25},{name: 'bun', cost: 5}]);
     *
     * const csvFile = document.CSV.generateCSV("test", tableMulti,',',true);
     *
     * section.add(new ui.Button(ui.icons.export, "Download CSV", () => {
     *     ui.download(csvFile);
     * }));
     */
    static generateCSV(
      name: string,
      data: ui.Table<any>,
      delimiter?: string,
      addHeader?: boolean
    ): File;
  }
}
