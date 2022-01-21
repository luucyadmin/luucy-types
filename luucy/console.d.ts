/** 
 * Console Output 
 * 
 * Comparable to the standard javascript console. 
 * Output will appear in the terminal that runs `luucy serve`.
 */
declare const console: {
    /** Writes debugging log to the console */
    log(...arguments): void;

    /** Writes a warning message to the console */
    warn(...arguments): void;

    /** Writes a error message to the console */
    error(...arguments): void;
}