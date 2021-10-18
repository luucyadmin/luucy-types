/** 
 * General Error 
 * 
 * Compareable to the standard javascript error
 */
declare class Error {
    message: string;
    stack: string;

    /** Create request */
    constructor(message: string);
}