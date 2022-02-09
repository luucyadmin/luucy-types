/** 
 * General Error 
 * 
 * Compareable to the standard javascript error
 */
declare class Error {
    readonly message: string;
    readonly stack: string;

    /** Create request */
    constructor(message: string);
}