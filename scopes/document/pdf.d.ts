declare namespace document {
    /**
     * PDF Export 
     * 
     * Export UI elements to a PDF file
     * 
     * @example // Export statistics
     * const pdf = new ui.PDFExport("Statistics");
     * pdf.element = statisticsTable;
     * 
     * pdf.download();
     */
    class PDF {
        /** 
         * Creates a PDF exporter
         * 
         * @param title - The PDFs title. Can't be changed after the PDF exporter has been created.
         * @param element - UI Element (and all their children) that should be exported
         */
        constructor(title: string, element?: ui.Element | ui.Container);

        readonly title: string;

        element?: ui.Element | ui.Container;

        download(): void;
    }
}