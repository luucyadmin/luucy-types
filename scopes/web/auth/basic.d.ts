declare namespace web {
    /**
     * Basic HTTP Authorization
     * 
     * Sends a Authorization header with the username and password base64 encoded. 
     * Only recommended over HTTPS connections!
     */
    class BasicAuthorization implements AuthorizationProvider {
        constructor(username: string, password: string);

        attach(request: Request): void;
    }
}