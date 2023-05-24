/// <reference path="pdf.d.ts" />
/// <reference path="csv.d.ts" />

declare enum PDFElementWidth {
    full,
    half
}

declare namespace document {
    /**
     * PDF element uses full width when appended to a file (100%)
     * 
     * pdf.add(table, document.full);
     */
    const full: PDFElementWidth;

    /**
     * PDF element uses half of the width when appended to a file (50%)
     * 
     * pdf.add(table, document.half);
     */
    const half: PDFElementWidth;
}
