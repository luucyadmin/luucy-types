declare namespace data {
    /**
     * UserSettings
     * 
     * Provide user setting of currently logged in user
     * 
     * Listen for changes by subscribing to `.onUserSettingsChange` on `data`
     */
    class UserSettings {
        /**
         * User id
         * 
         * The current user id
         */
        readonly id: number;

        /**
         * Percent of usage in variant
         */
        readonly email: string;

        /**
         * User configured locale
         */
        readonly locale: string;
    }
}