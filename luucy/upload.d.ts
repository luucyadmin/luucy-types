/** 
 * Uplaod handler 
 * 
 * Luucy plugins can register themselves to handle uploads.
 * The upload handlers are listed in the upload panel.
 * 
 * All upload handlers that match the pattern will be called.
 * 
 * @example // Listen to all *.mymodel uploads
 * const uploader = new Upload("*.mymodel");
 * uploader.onUpload.subscribe(file => {
 *     console.log("Uploaded ", file.name, ". Size: ", file.size, "bytes");
 * 
 *     file.toString().then(content => {
 *         console.log("Contents of ", file.name, ": ", content);
 *     });
 * });
 */
declare class Upload {
    /** 
     * Creates an upload listener. 
     * 
     * @param pattern specifies which files will be sent to the plugin. Use '*' as a wildcard (e.g. '*.txt', 'exported_model_*.txt').
     */
    constructor(pattern: string);

    /** 
     * Upload handler event
     * 
     * Will be called whenever a matching file is uploaded
     */
    onUpload: Event<File>;
}

/** 
 * File 
 * 
 * Will be created whenever a file is uploaded with `Upload`. 
 * The `File` object cannot be created by plugins.
 */
declare interface File {
    /** 
     * File name as uploaded.
     */
    readonly name: string;

    /** 
     * Size in bytes as uploaded
     */
    readonly size: number;

    /** 
     * Reads the file as a string 
     * 
     * @example // Reading the files content
     * file.toString().then(content => {
     *     console.log("Contents of ", file.name, ": ", content);
     * });
     */
    toString(): Promise<string>;
}