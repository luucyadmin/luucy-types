/**
 * Sun / Daylight control
 */
declare namespace map.daylight {
    /**
     * Controls the current date and time of the map
     */
    let date: Date;

    /** 
     * Controls the visibility of shadows in the map 
     */
    let shadows: boolean;

    /**
     * Play daylight simulation at defined speed
     * 
     * Omitting speed will use the currently set value
     */
    function play(speed?: number): void;

    /**
     * Pauses daylight simulation
     */
    function pause(): void;
}