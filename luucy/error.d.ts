/** General Error */
declare class Error {
    message: string;
    stack: string;

    /** Create request */
    constructor(message: string);
}