declare namespace map {
    interface ColoredArea {
        /**
         * Adds the colored area to a variant as a shape
         *
         * The shape will now be user editable and the plugin looses control over the object.
         */
        releaseToVariant(name: string): Promise<void>;

        /**
         * Adds the colored area to a variant as a shape
         *
         * The shape will now be user editable and the plugin looses control over the object.
         */
        releaseAsParcelToVariant(name: string): Promise<void>;
    }

    interface Line {
        /**
         * Adds the line to a variant as a shape
         *
         * The shape will now be user editable and the plugin looses control over the object.
         */
        releaseToVariant(name: string): Promise<void>;
    }

    interface Polygon {
        /**
         * Adds the polygon to a variant as a new shape
         *
         * The shape will now be user editable and the plugin looses control over the object.
         */
        releaseToVariant(name: string): Promise<void>;

        /**
         * Generates a polygon based on the provided form data
         *
         *
         * @example
         * const polygon = map.generatePolygon([
         *      new GlobalPosition(47.050390, 8.310263),
         *     new GlobalPosition(47.050390, 8.311263),
         *     new GlobalPosition(47.051390, 8.311263),
         *     new GlobalPosition(47.051390, 8.310263)],
         *    10,0.9,1,40, Color.red, Color.blue);
         *
         * @param points original parcel/area points
         * @param borderDistance distance from parcel/area border (m)
         * @param areaReduction reduction of the original area (%)
         * @param coverageRatio percentage of how much area should be covered by polygon (%)
         * @param maxTotalHeight maximum polygon height (m)
         * @param color polygon color
         * @param border polygon border color
         *
         * @returns list of polygon based on the points
         */
        fromGeneratePolygons(
            points: GlobalPosition[],
            borderDistance: number,
            areaReduction: number,
            coverageRation: number,
            maxTotalHeight: number,
            color?: Color,
            border?: { color: Color; width?: number } | Color
        ): Polygon[] | undefined;
    }
}

declare namespace data {
    interface Project {
        /**
         * Creates a new variant in the project and returns it
         */
        createVariant(
            name: string,
            drawing?: {
                edges: boolean;
                sketch: boolean;
                usages: boolean;
            }
        ): Promise<Variant>;
    }
}
