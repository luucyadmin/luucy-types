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
         * User configured locale
         */
        readonly locale: string;
    }
}