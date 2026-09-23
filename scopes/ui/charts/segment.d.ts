declare namespace ui {
    /**
     * A single segment of a chart
     *
     * Segments are created via `chart.addSegment(...)` and represent one value/color slice of a chart.
     */
    class ChartSegment {
        /**
         * Creates a chart segment and adds it to the chart
         */
        constructor(chart: BarChart, name: string, value: number, color?: Color);

        /**
         * Name of the segment
         */
        readonly name: string;

        /**
         * Value of the segment
         * 
         * Can be changed and will automatically update.
         */
        value: number;

        /**
         * Color of the segment
         * 
         * Can be changed and will automatically update.
         */
        color: Color;

        /**
         * Remove from chart
         */
        remove(): void;

        /**
         * Emits when the value of the segment changes
         */
        onChange: Event<number, number | undefined>;
    }
}