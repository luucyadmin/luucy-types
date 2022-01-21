declare namespace data {
    /** 
     * Luucy Organization 
     */
    class Organization {
        /** 
         * Organization name 
         */
        readonly name: string;

        /** 
         * Contact information of the organizations administrator 
         * 
         * Please do not abuse this information.
         */
        readonly contact: {
            /** 
             * Administrator name 
             */
            readonly name: string;

            /** 
             * Administrator email 
             */
            readonly email: string;
        }
    }

    /** 
     * Is called with all organizations associated to the currently logged in user.
     * 
     * @example // Show organizations
     * data.onOrganizationsChange.subscribe(organizations => {
     *     console.log("The current user is part of the following organizations:");
     * 
     *     for (let organization of organizations) {
     *         console.log(organization.name);
     *     }
     * });
     */
    const onOrganizationsChange: Event<Organization[]>;
}