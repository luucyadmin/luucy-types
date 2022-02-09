declare interface Console {
    /** Writes debugging log to the console */
    log(...arguments: any[]): void;

    /** Writes a warning message to the console */
    warn(...arguments: any[]): void;

    /** Writes a error message to the console */
    error(...arguments: any[]): void;
}

/** 
 * Console Output 
 * 
 * Comparable to the standard javascript console. 
 * Output will appear in the terminal that runs `luucy serve`.
 */
declare const console: Console;