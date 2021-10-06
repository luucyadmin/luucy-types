/** User Specific Local Storage */
declare const Storage: {
    /** Loads a string from memory */
    load(key: string): Promise<string>;

    /** Save a string to memory. The value will only be available to your plugin on this computer */
    save(key: string, value: string): Promise<void>;
}