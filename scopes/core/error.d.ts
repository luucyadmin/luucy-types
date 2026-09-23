/** 
 * General Error 
 * 
 * Compareable to the standard javascript error
 */
declare class Error {
    /** The error message */
    readonly message: string;
    /** The stack trace of the error */
    readonly stack: string;

    /** Create request */
    constructor(message: string);
}