declare namespace web {
    /** 
     * HTTP / HTTPS Requests 
     * 
     * @example // Create get request request
     * new web.Request("https://example.com/path").get().then(res => res.json()).then(data => {
     *     console.log(data);
     * });
     */
    class Request {
        /**
         * If a defaultAuthorization is set, all requests will automatically use this provider
         * 
         * @example // Use a default auth
         * web.Request.defaultAuthorization = new web.BasicAuthorization('admin', 'epic-password-123');
         * 
         * // this request will automatically send a Authorization header
         * new web.Request("https://example.com/path").get().then(res => res.text()).then(data => {
         *     console.log(data);
         * });
         */
        static defaultAuthorization: AuthorizationProvider | string;

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
         * Authorize request
         * 
         * Apply a authorization provider (`new web.BasicAuthorization(...)`, bearer, ...) to the request.
         * If `web.Request.defaultAuthorization` is set, this will overwrite the default for this request.
         */
        authorize(auth: AuthorizationProvider | string): this;

        /**
         * Creates or appends a value to FormData, used with .post()
         * 
         * When calling `.post`, don't pass any parameters!
         * 
         * @example // Create a request to a form data service
         * const request = new web.Request("https://example.com/form-data-api");
         * 
         * // adding simple fields
         * request.append("firstname", "Alexander");
         * request.append("lastname", "Muster");
         * request.append("age", 15);
         * 
         * // adding files
         * const jobApplication = File.fromString("some file");
         * request.append("application", jobApplication);
         * 
         * // adding multiple values for one key (works)
         * request.append("interest", "Jogging");
         * request.append("interest", "Politics");
         *     
         * // make the request
         * request.post().then(res => res.json()).then(data => {
         *     console.log(data.example); // should print 1234
         * });
         */
        append(name: string, value: string | number | File): this;

        /** 
         * Execute HTTP `GET` request.
         * 
         * @example // Reading some file from a server
         * new web.Request("https://example.com/path").get().then(res => res.text()).then(data => {
         *     console.log(data);
         * });
         */
        get(): Promise<Response>;

        /** 
         * Execute HTTP `POST` request 
         * - If a `string` is passed as a parameter, the request will send the raw value of the string
         * - If a `File` is passed, the request will send the contents of the file
         * - If a normal object is passed, the object will be JSON encoded and sent and a `Content-Type: application/json` will be set.
         * 
         * To send Form Data, use `.append(key, value)` and omit the parameter for `.post()`. 
         * 
         * @example // Posting a JSON object to a server, which will return some text
         * new web.Request("https://example.com/api/json").post({
         *     firstname: "Alexander",
         *     lastname: "Muster"
         * }).then(res => res.text()).then(data => {
         *     console.log(data); 
         * });
         * 
         * @example // Posting a raw string to a server, which will return some text
         * new web.Request("https://example.com/api/text").post("Some Raw String, for example XML").then(res => res.text()).then(data => {
         *     console.log(data); 
         * });
         * 
         * @example // Posting a file to a server, which will return some text
         * const file = File.fromString("Hello World!"); // example file, this could come from a `Upload` or some other requests response too
         * 
         * new web.Request("https://example.com/api/upload").post(file).then(res => res.text()).then(data => {
         *     console.log(data); 
         * });
         * 
         * @example // Posting form data to a server
         * const attachment = File.fromString("Hello World!"); // example file, this could come from a `Upload` or some other requests response too
         * 
         * new web.Request("https://example.com/api/email")
         *     .append("subject", "Hey Mark!")
         *     .append("body", "Here is my job application.")
         *     .append("attachment", attachment)
         *     .post()
         *     .then(res => res.text())
         *     .then(data => {
         *         console.log(data); 
         * });
         */
        post(data?: File | string | object): Promise<Response>;
    }
}