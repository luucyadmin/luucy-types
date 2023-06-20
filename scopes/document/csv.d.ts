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
     * const data:[][] = [["Fruit", "Price"], ["Banana", 10],["Apple", 20], ["Orange", 35]];
     *
     * const csvFile = document.CSV.generateCSV("fruit_prices", data, true);
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
