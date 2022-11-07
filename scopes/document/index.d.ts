/// <reference path="pdf.d.ts" />

declare enum PDFElementWidth {
    Full = 100,
    Half = 50
}

declare namespace document {
    /**
     * PDF element uses full width when appended to a file (100%)
     * 
     * pdf.add(table, document.PDFElementWidth.Full);
     */
    const full: PDFElementWidth;

    /**
     * PDF element uses half of the width when appended to a file (50%)
     * 
     * pdf.add(table, document.PDFElementWidth.Half);
     */
    const half: PDFElementWidth;
}
