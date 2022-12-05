/// <reference path="segment.d.ts" />
/// <reference path="bar-chart.d.ts" />
/// <reference path="pie-chart.d.ts" />

declare namespace ui {
    /**
     * Chart Element
     * 
     * All Charts implement Chart element.
     * The interface does not contain any properties or functions on its own.
     */
    interface ChartElement {
        /**
         * Title of Chart
         */
        readonly name: string;

        /**
         * Label of segments and total amount
         */
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
