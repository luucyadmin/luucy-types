declare namespace ui {
    /** 
     * Pie chart 
     * 
     * @example // Create a age chart of members
     * const chart = new ui.PieChart("Age of members", '');
     * chart.addSegment("< 18", 100);
     * chart.addSegment("18 - 24", 150);
     * chart.addSegment("25 - 65", 20);
     * chart.addSegment("> 65", 20);
     * 
     * section.add(chart);
     */
    class PieChart extends Element implements ChartElement {
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
         * @param name Title of the chart
         * @param unit Unit of the segments' values
         * @param help - Will provide tooltip help on mouseover
         */
        constructor(name: string, unit?: string | ((value: number) => string), help?: string);

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
