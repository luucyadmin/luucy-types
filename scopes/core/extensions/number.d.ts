interface Number {
    /**
     * Converts a number to a user friendly format
     * 
     * `0.12 → '0.12'`
     * `123 → '123'`
     * `12345.67 → '12345'`
     */
    toFloatingString(unit: string): string;

    /**
     * Converts a number (in degrees) to degrees
     * 
     * `0.51 → '0.51°'`
     * `349 → '349°'`
     */
    toDegrees(percision?: number): string;

    /**
     * Converts a number (radians) to degrees
     * 
     * `π/2 → '90°'`
     * `3.1415 → '180°'`
     */
    toRadianDegrees(percision?: number): string;

    /**
     * Converts a number to a area string
     * 
     * `0.51 → '0.51m²'`
     * `12345.67 → '12345m²'`
     */
    toMetricAreaString(percision?: number): string;

    /**
     * Converts a number to a volume string
     * 
     * `0.51 → '0.51m³'`
     * `12345.67 → '12345m³'`
     */
    toMetricVolumeString(percision?: number): string;
}