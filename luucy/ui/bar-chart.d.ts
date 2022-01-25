declare namespace ui {
    /** 
     * Vertical bar chart 
     * 
     * @example // Create a price chart
     * const chart = new ui.BarChart("Total Cost", "$");
     * chart.addSegment("Plot", 100);
     * chart.addSegment("Building", 150);
     * chart.addSegment("Architect", 20);
     * 
     * section.add(chart);
     */
    class BarChart extends Element {
        constructor(name: string, unit?: string);

        readonly name: string;
        readonly unit: string;
        readonly max: number;

        /**
         * Adds a new segment to the chart
         */
        addSegment(name: string, value: number): void;

        /**
         * Returns a copy of all segments
         */
        getSegments(): [{
            name: string,
            value: number
        }];

        onChange: Event<void>;
    }
}