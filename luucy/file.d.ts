/** 
 * File 
 * 
 * Will be created whenever a file is uploaded with `Upload`. 
 * The `File` object cannot be created by plugins, you'll need to use the `from` methods
 */
 declare class File {
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

    /**
     * Creates a file from string contents
     * 
     * @example // Create an .obj file and download it
     * const file = File.fromString("test.obj", "v 0 0 0\nv 1 0 0\nv 0.5 0.5 0\nf 1 2 3");
     * 
     * section.add(new ui.Button(ui.icons.export, "Download OBJ", () => {
     *     ui.download(file);
     * }));
     */
    static fromString(name: string, content: string): File;
}