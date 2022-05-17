declare namespace web {
    /** 
     * HTTP Response 
     * 
     * Responses are created by using `new web.Request(...)`. 
     */
     interface Response {
        /** 
         * Read response data as JSON 
         * Will convert the servers response from JSON to an object.
         * 
         * @example // Parsing the response as JSON
         * // Let's assume that the `https://example.com/path`-API returns a json object: `"{"example":1234}"`
         * new web.Request("https://example.com/path").get().then(res => res.json()).then(data => {
         *     console.log(data.example); // should print 1234
         * });
         */
        json(): Promise<any>;

        /** 
         * Read response data as plain text 
         * 
         * Do not convert the data to an object with `JSON.parse()`, use `.json()` instead of `.text()`!
         */
        text(): Promise<string>;

        /**
         * Read response as a file
         */
        file(name: string): Promise<File>;
    }
}