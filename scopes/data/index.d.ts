/// <reference path="building-usage.d.ts" />
/// <reference path="building.d.ts" />
/// <reference path="building-block.d.ts" />
/// <reference path="building-floor.d.ts" />
/// <reference path="metric.d.ts" />
/// <reference path="organization.d.ts" />
/// <reference path="parcel.d.ts" />
/// <reference path="project.d.ts" />
/// <reference path="roof-section.d.ts" />
/// <reference path="usage.d.ts" />
/// <reference path="user-settings.d.ts" />
/// <reference path="variant.d.ts" />
/// <reference path="wall.d.ts" />

declare enum FloorType {
    overground,
    underground,
    ground,
}

declare enum RoofType {
    flat,
    doublepitch,
    monopitch,
}


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
     * Will be executed when a user setting is changed.
     * 
     * @example // Listen for user settings change
     * data.onUserSettingsChange.subscribe(settings => {
     *     console.log("User locale changed to: " + settings.locale)
     * });
     */
    const onUserSettingsChange: Event<UserSettings>;
    
    /**
     * Contains the currently selected project.
     * 
     * Try to use the `onProjectSelect` event as it will fire when the user switches projects.
     */
    const selectedProject: Project | null;


    /**
     * Flat roof type
     */
    const flat: RoofType;
    /**
     * Double pitch roof type
     */
    const doublepitch: RoofType;

    /**
     * Mono pitch roof type
     */
    const monopitch: RoofType;

    /**
     * Overground floor type
     */
    const overground: FloorType; 

    /**
     * Underground floor type
     */
    const underground: FloorType; 

    /**
     * Ground floor type
     */
    const ground: FloorType; 
}