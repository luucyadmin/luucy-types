/// <reference path="basic.d.ts" />
/// <reference path="bearer.d.ts" />

declare namespace web {
    /**
     * Provides method for authorizing over HTTP.
     * 
     * Implementations can be found in
     * - `BasicAuthorization` for basic username / password auth
     * - `BearerAuthorization` for bearer tokens
     */
    interface AuthorizationProvider {
        /**
         * Called by the request when `.authorize` is used
         */
        attach(request: web.Request);
    }
}