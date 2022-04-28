declare namespace ui {
    /** 
     * Vertical bar chart 
     * 
     * @example // Create a price chart
     * const chart = new ui.BarChart("Total Area", value => value.toMetricAreaString());
     * chart.addSegment("House 1", 100);
     * chart.addSegment("House 2", 150);
     * chart.addSegment("Shed", 20);
     * 
     * section.add(chart);
     */
    class BarChart extends Element {
        constructor(name: string, unit?: string | ((value: number) => string));

        readonly name: string;
        readonly unit: string;

        /**
         * Max value displayed in chart
         * 
         * This may be set to a higher value than the segments, which will display a gray filler bar at the end of the chart.
         */
        max: number;

        /**
         * Total value of all segments added up
         */
        total: number;

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