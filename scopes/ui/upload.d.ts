declare namespace ui {
    /** 
     * Uplaod handler 
     * 
     * Luucy plugins can register themselves to handle uploads.
     * The upload handlers are listed in the upload panel.
     * 
     * All upload handlers that match the pattern will be called.
     * 
     * @example // Listen to all *.mymodel uploads
     * const uploader = new ui.Upload("*.mymodel");
     * uploader.onUpload.subscribe(file => {
     *     console.log("Uploaded ", file.name, ". Size: ", file.size, "bytes");
     * 
     *     file.toString().then(content => {
     *         console.log("Contents of ", file.name, ": ", content);
     *     });
     * });
     */
    class Upload {
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
}