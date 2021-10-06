/** Luucy Project */
declare class Project {
    /** Project name */
    name: string;

    /** Will be called when a variant is selected */
    onvariantselect: PluginEvent<Variant | null>;
}

/** Will be executed when a project is selected */
declare const onprojectselect: PluginEvent<Project | null>