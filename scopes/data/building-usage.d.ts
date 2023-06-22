declare namespace data {
    class BuildingUsage {
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
        readonly projectId: number;
    }
}