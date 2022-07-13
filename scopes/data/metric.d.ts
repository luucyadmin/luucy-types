declare namespace data {
    /**
     * Metrics contain both under and overground values for building properties.
     */
    class Metric {
        constructor(overground: number, underground: number);

        overground: number;
        underground: number;

        readonly total: number;
    }
}