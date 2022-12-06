declare namespace marketplace {
    /**
     * Requests an in-app purchase from the user.
     * 
     * Will return a token, if the transaction was successful.
     * `false` is returned, if the user rejected the purchase request.
     * 
     * The token can be verified by calling HTTP://LUUCYENDPOINTMISSING!!!, which will return details about the purchase.
     * An error will be returned if the token expired or was invalid
     * ```
     * {
     *     "date": "2022-07-13T10:46:29.158Z",
     *     "consumable": "ecological-report",
     *     "item": "8001", // the restoration key passed to `marketplace.purchase`
     *     "count": 1, // how many items were purchased (parameter count of marketplace.purchase)
     *     "trial": true // will be true when the trial was used for this purchase
     * }
     * ```
     * 
     * The consumable has to be defined in your `package.json`.
     * ```
     * {
     *     "name": "nature-plugin",
     *     ...
     *     "consumables": {
     *         "ecological-report": {
     *             "name": "Ecological Report",
     *             "description": "Detailed report about the environment of a parcel",
     *             "trial": 1, // how many times this consumable can be tried for free
     *             "expires": 30, // days until this purchase expires and cannot be restored anymore (optional)
     *             "cost": [
     *                 { "count": 1, "cost": 50 }, // define packs
     *                 { "count": 3, "cost": 120 },
     *                 { "count": 10, "cost": 300 },
     *                 { "flat": true, "cost": 500 } // defines a unlimited flat-rate type
     *             ]
     *         }
     *     }
     * }
     * ```
     * 
     * @example // Buy a ecological report for a parcel
     * // Make sure to define the consumable in `package.json`!
     * const buyButton = new ui.Button('Buy Report', () => {
     *     const token = await marketplace.purchase('ecological-report', zipCode); // zipCode identifies your report. use `marketplace.restore` to restore a purchase
     *     
     *     if (token) {
     *         section.add(new ui.LinkButton('Download Report', 'https://example.com/report/' + token));
     *         section.remove(buyButton);
     *     }
     * });
     * 
     * section.add(buyButton);
     */
    function purchase(consumableKey: string, restorationKey?: string, count?: number): Promise<string | false>;

    /**
     * Restores a purchase by consumable and key
     * 
     * Will return `false` if the item was not bought before
     * The orders token (the same returned by `purchase` when buying this item) is returned otherwise.
     * 
     * @example // Show a download button for the report if the user already bought it
     * const token = await marketplace.restore('ecological-report', zipCode);
     * 
     * if (token) {
     *     section.add(new ui.LinkButton('Download Report', 'https://example.com/report/' + token));
     * } else {
     *     section.add(new ui.Button('Buy Report', () => {
     *         ...
     *     });
     * }
     */
    function restore(consumableKey: string, restorationKey: string): Promise<string | false>;
}