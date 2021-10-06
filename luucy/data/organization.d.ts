/** Luucy Organization */
declare class Organization {
    /** Organization name */
    name: string;

    /** Contact information of the organizations administrator */
    contact: {
        /** Administrator name */
        name: string;

        /** Administrator email */
        email: string;
    }
}

/** Will be executed when a project is selected */
declare const onorganizationschange: PluginEvent<Project | null>