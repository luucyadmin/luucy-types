declare namespace web {
    /**
     * Bearer / OAuth HTTP Authorization
     * 
     * Sends a Authorization header with a token.
     * Only recommended over HTTPS connections!
     */
    class BearerAuthorization implements AuthorizationProvider {
        constructor(username: string, password: string);

        attach(request: Request): void;
    }
}