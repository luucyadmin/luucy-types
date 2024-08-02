/** 
 * Extends the Number prototype with common formatting methods
 */
interface Number {
    /**
     * Converts a number to a user friendly format string
     * 
     * @argument unit - The unit to append to the string
     * 
     * `0.12 → '0.12'`
     * `123 → '123'`
     * `12345.67 → '12345'`
     * `12345.67, 'V' → '12345 V'`
     */
    toFloatingString(unit?: string): string;

    /**
     * Converts a number (in degrees) to degrees string
     * 
     * `0.51 → '0.51 °'`
     * `349 → '349 °'`
     */
    toDegrees(percision?: number): string;

    /**
     * Converts a number (radians) to degrees string
     * 
     * `π/2 → '90 °'`
     * `3.1415 → '180 °'`
     */
    toRadianDegrees(percision?: number): string;

    /**
     * Converts a number to a length string
     * 
     * `0.52 -> '0.51 m'`
     * `12345.67 → '12345 m'`
     */
    toMetricLengthString(percision?: number): string;

    /**
     * Converts a number to a area string
     * 
     * `0.51 → '0.51 m²'`
     * `12345.67 → '12345 m²'`
     */
    toMetricAreaString(percision?: number): string;

    /**
     * Converts a number to a volume string
     * 
     * `0.51 → '0.51 m³'`
     * `12345.67 → '12345 m³'`
     */
    toMetricVolumeString(percision?: number): string;
}