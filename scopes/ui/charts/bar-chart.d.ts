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
         * @param tooltip - Will provide tooltip on mouseover
         */
        constructor(name: string, unit?: string | ((value: number) => string), tooltip?: string);

        readonly name: string;
        readonly unit: string | ((value: number) => string);
        readonly total: number;
        max: number;
        addSegment(name: string, value: number, color?: Color): ChartSegment;
        getSegments(): ChartSegment[];
        removeSegments(): void;
        removeSegment(segment: ChartSegment): void;
        onChange: Event<void>;
    }
}