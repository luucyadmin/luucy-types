/** 
 * HTTP / HTTPS Requests 
 * 
 * @example // Create get request request
 * new Request("https://example.com/path").get().then(res => res.json()).then(data => {
 *     console.log(data);
 * });
 */
declare class Request {
    /** 
     * Create request, compareable to the javascript `fetch()` interface.
     * Luucy masks your HTTP(s) requests.
     * 
     * @param url - the url of your request. this must be absolute (http://example.com/path, https://example.com/, ...)
     * 
     * This will *not* fire your request, you'll need to call `.get()` or `.post()`!
     */
    constructor(url: string);

    /** 
     * Add header to request.
     * 
     * Some headers cannot be added, as listed in this list: https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name. 
     */
    addHeader(name: string, value: string): Request;

    /** 
     * Execute HTTP `GET` request 
     * 
     * @returns { Promise<Response> } The response object, which has to be resolved to read the data.
     */
    get(): Promise<Response>;
}

/** 
 * HTTP Response 
 * 
 * Responses are created by using the `Request` global. 
 * This class cannot be initated by plugins.
 */
declare class Response {
    /** 
     * Read response data as JSON 
     * Will convert the servers response from JSON to an object.
     * 
     * @example // Parsing the response as JSON
     * // Let's assume that the `https://example.com/path`-API returns a json object: `"{"example":1234}"`
     * new Request("https://example.com/path").get().then(res => res.json()).then(data => {
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
}