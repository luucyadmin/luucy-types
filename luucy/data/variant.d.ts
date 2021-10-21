/** 
 * Luucy Variant 
 * 
 * A project variant presents a way of realizing a infrastructure project. 
 * Multiple variants will be compared to eachother by the user to find the optimal way to realize a project.
 */
declare class Variant {
    /** 
     * Variant name 
     */
    readonly name: string;

    /** 
     * Contains the total area of all buildings and uses of this project variant 
     */
    readonly totalArea: number;

    /** 
     * Contains the total volume of all buildings and uses of this project variant 
     */
    readonly totalVolume: number;

    /** 
     * Will be called when the variants total volume changes 
     * 
     * @example Listen to changes in the volume
     * variant.onTotalVolumeChange.subscribe(volume => {
     *     console.log("Volume of ", variant.name, " changed to ", volume, "m³")
     * });
     */
    readonly onTotalVolumeChange: PluginEvent<number | null>;

    /** 
     * Will be called when the variants total area changes 
     * 
     * @example Listen to changes in the area
     * variant.onTotalAreaChange.subscribe(area => {
     *     console.log("Area of ", variant.name, " changed to ", area, "m²")
     * });
     */
    readonly onTotalAreaChange: PluginEvent<number | null>;
}