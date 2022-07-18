declare namespace marketplace {
    /**
     * Requests an in-app purchase from the user.
     * 
     * The consumable has to be defined in your `package.json`.
     * ```
     * {
     *     "name": "nature-plugin",
     *     ...
     *     "consumables": {
     *         "ecological-report": {
     *             "name": "Ecological Report",
     *             "description": "Detailed report about the ecologics of a parcel",
     *             "trial": 1,
     *             "expires": 30,
     *             "cost": 50,
     *             "discount": [
     *                  { "min": 3, "cost": 120 },
     *                  { "min": 10, "cost": 350 }
     *             ]
     *         }
     *     }
     * }
     * ```
     * 
     * @example // Buy a ecological report for a parcel
     * 
     */
    function purchase(consumableKey: string, restorationKey?: string, count?: number): Promise<boolean>;

    function hasPurchased(consumableKey: string, restorationKey: string): Promise<boolean>;

    function restore(consumableKey: string, restorationKey: string): Promise<string>;
}