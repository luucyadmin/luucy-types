/**
 * A 3D position / location on the map
 * 
 * The latitude and longitude are in the WG84 format used by most maps (Google Maps, ...).
 * 
 * @example const lucerne = new GlobalPosition(47.050390, 8.310263),
 * @example const zurich = new GlobalPosition(47.3774162, 8.5414963),
 * @example const paris = new GlobalPosition(48.8578516, 2.2942959),
 * @example const newYork = new GlobalPosition(40.689834, -74.045940),
 * @example const london = new GlobalPosition(51.500822, -0.123705);
 */
declare class GlobalPosition {
    /**
     * Converts lv03 coordinates to a global position
     */
    static fromLV03(eath: number, north: number): GlobalPosition;

    /**
     * Converts lv95 coordinates to a global position
     */
    static fromLV95(eath: number, north: number): GlobalPosition;

    constructor(latitude: number, longitude: number, height?: number);

    /**
     * Latitude describing the east/west-ness of a point.
     * 
     * This is the one that is `0` in Greenwich near London.
     */
    latitude: number;

    /**
     * Longitude describing the north/south-ness of a point.
     * 
     * This is the one that is `0` at the equator.
     */
    longitude: number;

    /** 
     * Height in meters above sealevel.
     */
    height?: number;

    /**
     * Creates a copy of the position, without the `height` component.
     */
    flattenedCopy(): GlobalPosition;

    /**
     * Creates a copy of the position, optionally offset by `offsetLatitude` and `offsetLongitude`
     */
    copy(offsetLatitude?: number, offsetLongitude?: number, height?: number): GlobalPosition;

    /**
     * Add the local position to this position, returns a new global position
     */
    apply(local: LocalPosition): GlobalPosition;

    /**
     * Measure distance between two positions
     */
    distance(to: GlobalPosition): number;

    /**
     * Checks if the point is inside the polygon
     */
    inside(polygon: GlobalPosition[]): boolean;

    /**
     * Convert location to swiss lv03 format
     */
    toLV03(): { east: number, north: number, toString(): string };

    /**
     * Convert location to swiss lv95 format
     */
    toLV95(): { east: number, north: number, toString(): string };

    /**
     * Converts the coordinate to a string
     */
    toString(): string;

    /**
     * Converts the coordinate to a human readable string
     */
    toLocaleString(): string;
}