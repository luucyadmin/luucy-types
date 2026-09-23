declare namespace data {
    /**
     * Metrics contain both under and overground values for building properties.
     */
    class Metric {
        /**
         * Creates a metric from an overground and underground value.
         */
        constructor(overground: number, underground: number);

        /**
         * Overground value
         */
        overground: number;
        /**
         * Underground value
         */
        underground: number;

        /**
         * Sum of the overground and underground values
         */
        readonly total: number;
    }
}