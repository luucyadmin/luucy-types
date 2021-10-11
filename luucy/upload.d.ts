/** Uplaod handler */
declare class Upload {
    /** Creates an upload listener. The plugin will be listed in the upload panel */
    /** @param pattern specifies which files will be sent to the plugin. Use '*' as a wildcard (e.g. '*.txt', 'exported_model_*.txt') */
    constructor(pattern: string);

    /** Is called whenever a matching file is uploaded */
    onupload: PluginEvent<File>;
}

/** File */
declare interface File {
    /** File name */
    name: string;

    /** Size in bytes */
    size: number;

    /** Reads the file as a string */
    toString(): Promise<string>;
}