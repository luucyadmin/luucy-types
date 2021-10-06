/** HTTP / HTTPS Requests */
declare class Request {
    /** Create request */
    constructor(url: string);

    /** Add header to request. Can be chained */
    addHeader(name: string, value: string): Request;

    /** Execute HTTP `GET` request */
    get(): Promise<Response>;
}

/** HTTP Response */
declare class Response {
    /** Parse response data as JSON */
    json(): Promise<any>;

    /** Parse response data as plain text */
    text(): Promise<string>;
}