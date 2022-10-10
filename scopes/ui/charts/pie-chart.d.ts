declare namespace ui {
    /** 
     * Pie chart 
     * 
     * @example // Create a age chart of members
     * const chart = new ui.PieChart("Age of members");
     * chart.addSegment("< 18", 100);
     * chart.addSegment("18 - 24", 150);
     * chart.addSegment("25 - 65", 20);
     * chart.addSegment("> 65", 20);
     * 
     * section.add(chart);
     */
    class PieChart extends Element {
        constructor(name: string);

        readonly name: string;
        readonly unit: string;

        /**
         * Total value of all segments added up
         */
        readonly total: number;

        /**
         * Adds a new segment to the chart
         */
        addSegment(name: string, value: number, color?: Color): ChartSegment;

        /**
         * Returns a copy of all segments
         */
        getSegments(): ChartSegment[];

        /**
         * Removes all segments from the chart
         */
        removeSegments(): void;

        /**
         * Removes one segment from the chart
         */
        removeSegment(segment: ChartSegment): void;

        onChange: Event<void>;
    }
}
