declare namespace ui {
    class ChartSegment {
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

        onChange: Event<number>;
    }
}