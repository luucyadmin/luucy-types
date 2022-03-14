/// <reference path="building.d.ts" />
/// <reference path="organization.d.ts" />
/// <reference path="project.d.ts" />
/// <reference path="roof.d.ts" />
/// <reference path="usage.d.ts" />
/// <reference path="variant.d.ts" />
/// <reference path="wall.d.ts" />

/**
 * Contains all the data-related classes that luucy exposes 
 */
declare namespace data {
    /** 
     * Will be executed when a project is selected.
     * The emitted project may be `null`!
     * 
     * The event will be automatically called if a project is already selected on page load / plugin install.
     * 
     * @example // Listen for project select
     * data.onProjectSelect.subscribe(project => {
     *     if (project) {
     *         console.log("Selected project: ", project);
     *     } else {
     *         console.log("No project selected!")
     *     }
     * });
     */
    const onProjectSelect: Event<Project | null>;

    /**
     * Contains the currently selected project.
     * 
     * Try to use the `onProjectSelect` event as it will fire when the user switches projects.
     */
    const selectedProject: Project | null;
}