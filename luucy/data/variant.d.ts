/** Luucy Variant */
declare class Variant {
    /** Variant name */
    name: string;

    /** Contains the total area of all buildings and uses of this project variant */
    totalArea: number;

    /** Contains the total volume of all buildings and uses of this project variant */
    totalVolume: number;

    /** Will be called when the variants total volume changes */
    ontotalvolumechange: PluginEvent<number | null>;

    /** Will be called when the variants total area changes */
    ontotalareachange: PluginEvent<number | null>;
}