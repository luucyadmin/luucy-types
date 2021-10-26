# Class: Project

[luucy/data/project](../modules/luucy_data_project.md).Project

Luucy Project

A project may contain multiple `Varaint`s.

## Table of contents

### Constructors

- [constructor](luucy_data_project.Project.md#constructor)

### Properties

- [name](luucy_data_project.Project.md#name)
- [onVariantSelect](luucy_data_project.Project.md#onvariantselect)

## Constructors

### constructor

• **new Project**()

## Properties

### name

• `Readonly` **name**: `string`

Project name

#### Defined in

[luucy/data/project.d.ts:10](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/data/project.d.ts#L10)

___

### onVariantSelect

• `Readonly` **onVariantSelect**: [`Event`](luucy_event.Event.md)<[`Variant`](luucy_data_variant.Variant.md)\>

Will be called when a variant is selected
The emitted variant may be `null`!

The event will be automatically called if a variant is already selected on page load / plugin install.

**`example`**
//  Listen for variant select
project.onVariantSelect.subscribe(variant => {
    if (variant) {
        console.log("Selected variant: ", variant);
    } else {
        console.log("No variant selected!")
    }
});

#### Defined in

[luucy/data/project.d.ts:28](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/data/project.d.ts#L28)
