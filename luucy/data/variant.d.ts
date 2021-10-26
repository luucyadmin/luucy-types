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
     * Contains the floor area of all buildings and uses of this project variant 
     */
    readonly floorArea: number;

    /** 
     * Contains the volume of all buildings and uses of this project variant 
     */
    readonly volume: number;

    /** 
     * Will be called when the variants volume changes 
     * 
     * @example 
     * //  Listen to changes in the volume
     * variant.onVolumeChange.subscribe(volume => {
     *     console.log("Volume of ", variant.name, " changed to ", volume, "m³")
     * });
     */
    readonly onVolumeChange: Event<number | null>;

    /** 
     * Will be called when the variants floor area changes 
     * 
     * @example 
     * //  Listen to changes in the area
     * variant.onFloorAreaChange.subscribe(area => {
     *     console.log("Area of ", variant.name, " changed to ", area, "m²")
     * });
     */
    readonly onFloorAreaChange: Event<number | null>;
}