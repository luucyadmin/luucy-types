declare namespace document {
    /**
     * PDF Export 
     * 
     * Export UI elements to a PDF file
     * 
     * @example // Export statistics
     * const pdf = new document.PDF('Statistics');
     * 
     * pdf.add(table, document.half);
     * pdf.add(infoParagraph, document.half);
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
         * Add a ui container to the PDF exporter
         * 
         * Each child of the container gets added separately with the given width.
         * To have more control over the order and width of each element add them one by one without the container.
         * @param container Contains element children
         * @param width Defines how much width is occupied by each child element in the PDF
         */
        add(container: ui.ElementContainer, width?: PDFElementWidth): void;

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
}