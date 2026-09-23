declare namespace data {
    /**
     * A usage type assigned to a building floor, such as living or commercial area.
     */
    class BuildingUsage {
        /**
         * Unique id of the usage
         */
        readonly id: number;

        /**
         * Name of the usage
         */
        readonly name: string;

        /**
         * color of the usage
         */
        readonly color?: Color;

        /**
         * Id of the project
         */
        readonly projectId?: number;
    }
}