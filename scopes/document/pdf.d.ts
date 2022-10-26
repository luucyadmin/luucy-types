declare namespace document {
    /**
     * PDF Export 
     * 
     * Export UI elements to a PDF file
     * 
     * @example // Export statistics
     * const pdf = new document.PDF('Statistics', statisticsTable);
     * pdf.download();
     */
    class PDF {
        /** 
         * Creates a PDF exporter
         * 
         * @param title - The PDFs title.
         * @param element - UI Element (and all their children) that should be exported.
         */
        constructor(title: string, element: ui.Element | ui.ElementContainer);

        readonly title: string;

        readonly element: ui.Element | ui.ElementContainer;

        download(): void;
    }
}