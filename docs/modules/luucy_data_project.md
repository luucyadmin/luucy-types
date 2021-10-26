# Module: luucy/data/project

## Table of contents

### Classes

- [Project](../classes/luucy_data_project.Project.md)

### Variables

- [onProjectSelect](luucy_data_project.md#onprojectselect)

## Variables

### onProjectSelect

• **onProjectSelect**: [`Event`](../classes/luucy_event.Event.md)<[`Project`](../classes/luucy_data_project.Project.md) \| ``null``\>

Will be executed when a project is selected.
The emitted project may be `null`!

The event will be automatically called if a project is already selected on page load / plugin install.

**`example`**
//  Listen for project select
project.onProjectSelect.subscribe(project => {
    if (project) {
        console.log("Selected project: ", project);
    } else {
        console.log("No project selected!")
    }
});

#### Defined in

[luucy/data/project.d.ts:47](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/data/project.d.ts#L47)
