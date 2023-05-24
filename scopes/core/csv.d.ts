/** 
 * CSV 
 * 
 * Provide methods to create CSV file from ui.Table data
 */
 declare class CSV {


    /**
     * Creates a CSV file from given table
     * 
     * @param name filename 
     * @param data table data hodling the values for generate CSV
     * @param format (default csv) output file format (currently only CSV is allowed)
     * @param delimiter (default , ) CSV delimiter character
     * @param addHeader (default false) flag if the header of the table should be added to result CSV file
     * 
     * @example // Create an .obj file and download it
     * const csvFile = CSV.generateCSV("results",data, "csv", ", true);
     * 
     * section.add(new ui.Button(ui.icons.export, "Download CSV", () => {
     *     ui.download(file);
     * }));
     */
    static generateCSV(name: string, data: ui.Table<any>, format?: string, delimiter?: string, addHeader?: boolean): File
}