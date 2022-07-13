/**
 * A local 3D position / location on the map
 * 
 * The latitude and longitude represent meters
 * 
 * @example const threeMetersFiveMeters = new LocalPosition(3, 5);
 */
declare class LocalPosition {
    /**
     * Zero Position, 0/0/0
     */
    static readonly zero: GlobalPosition;

    constructor(x: number, y: number, z?: number);

    /**
     * X position component
     */
    x: number;

    /**
     * Y position component
     */
    y: number;

    /** 
     * z (height) in meters.
     */
    z?: number;

    /**
     * Creates a copy of the position, without the `height` component.
     */
    flattenedCopy(): LocalPosition;

    /**
     * Creates a copy of the position, optionally offset by `offsetX`, `offsetY` and `offsetZ`
     */
    copy(offsetX?: number, offsetY?: number, offsetZ?: number): LocalPosition;
}