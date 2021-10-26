/** 
 * Luucy Project 
 * 
 * A project may contain multiple `Varaint`s.
 */
declare class Project {
    /** 
     * Project name 
     */
    readonly name: string;

    /** 
     * Will be called when a variant is selected 
     * The emitted variant may be `null`!
     * 
     * The event will be automatically called if a variant is already selected on page load / plugin install.
     * 
     * @example // Listen for variant select
     * project.onVariantSelect.subscribe(variant => {
     *     if (variant) {
     *         console.log("Selected variant: ", variant);
     *     } else {
     *         console.log("No variant selected!")
     *     }
     * });
     */
    readonly onVariantSelect: Event<Variant | null>;
}

/** 
 * Will be executed when a project is selected.
 * The emitted project may be `null`!
 * 
 * The event will be automatically called if a project is already selected on page load / plugin install.
 * 
 * @example // Listen for project select
 * project.onProjectSelect.subscribe(project => {
 *     if (project) {
 *         console.log("Selected project: ", project);
 *     } else {
 *         console.log("No project selected!")
 *     }
 * });
 */
declare const onProjectSelect: Event<Project | null>