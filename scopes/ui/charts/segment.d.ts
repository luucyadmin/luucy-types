declare namespace ui {
    class ChartSegment {
        /**
         * Name of the segment
         */
        readonly name: string;

        /**
         * Value of the segment
         * 
         * Can be changed and will automatically update.
         */
        value: string;

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

        onValueChange: Event<number>;
    }
}