declare namespace document {
    /**
     * PDF Export 
     * 
     * Export UI elements to a PDF file
     * 
     * @example // Export statistics
     * const pdf = new document.PDF('Statistics');
     * 
     * pdf.add(table);
     * pdf.add(infoParagraph, );
     * pdf.add(barChart);
     * 
     * pdf.download();
     */
    class PDF {
        /** 
         * Creates a PDF exporter
         * 
         * @param title - The PDFs title.
         */
        constructor(title: string);

        readonly title: string;

        /**
         * Adds a ui element to the PDF exporter
         * @param element UI element
         * @param width Defines how much width is occupied by the element in the PDF
         */
        add(element: ui.Element, width?: PDFElementWidth): void;

        /**
         * Starts the print process in the browser.
         * 
         * Download the PDF generated with the added elements.
         */
        download(): void;
    }

    enum PDFElementWidth {
        Full,
        Half
    }
}