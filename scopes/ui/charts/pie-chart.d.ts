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
        /**
         * The unit acts as the label of each segment
         * Entering a simple string for the unit will append it to the value of each segment
         * Entering a function for the unit enables to build a more complex label
         * 
         * ```
         * // Outputs (200km, 150km, 35km)
         * new ui.PieChart("Total range", "km")
         * 
         * // Outputs (750g, 12.5kg, 490g)
         * new ui.PieChart("Total weight", value => value > 1000 ? `${value / 1000}kg` : `${value}g`);
         * ```
         * 
         * @param name Label of the chart
         * @param unit Unit of the segments' values
         */
        constructor(name: string, unit?: string | ((value: number) => string));

        readonly name: string;
        readonly unit: string | ((value: number) => string);

        /**
         * Total value of all segments added up
         */
        readonly total: number;

        /**
         * Max value displayed in chart
         * 
         * This may be set to a higher value than the segments, which will display a gray filler segment at the end of the chart.
         */
        max: number;

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
