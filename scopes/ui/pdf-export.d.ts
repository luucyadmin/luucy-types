declare namespace ui {
    /**
     * PDF Export 
     * 
     * Allows to export UI elements as a PDF file
     * 
     * @example // Export statistics
     * const pdf = new ui.PDFExport("Statistics");
     * pdf.element = statisticsTable;
     * 
     * pdf.download();
     */
    class PDFExport {
        /** 
         * Creates a PDF exporter
         * 
         * @param title - The PDFs title. Can't be changed after the PDF exporter has been created.
         * @param element - UI Element (and all their children) that should be exported
         */
        constructor(title: string, element?: Element | ElementContainer);

        readonly title: string;

        element?: Element | ElementContainer;

        download(): void;
    }
}