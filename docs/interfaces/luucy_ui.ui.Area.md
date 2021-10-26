# Interface: Area<TChildren\>

[luucy/ui](../modules/luucy_ui.md).[ui](../modules/luucy_ui.ui.md).Area

Plugin Area

The global areas are exposed in `ui.areas` (eg. `ui.areas.panel`, `ui.areas.dataAndUsage`, ...)

## Type parameters

| Name |
| :------ |
| `TChildren` |

## Implemented by

- [`Panel`](../classes/luucy_ui.ui.Panel.md)

## Table of contents

### Methods

- [add](luucy_ui.ui.Area.md#add)

## Methods

### add

▸ **add**(`section`): `any`

Adds an element to a area.

Adding elements (preferably a `Section`) to an area will display them inside of the area.
A little `Provided by {your plugins name}` will be added after each element.
Wrap your elements in `Container` to group them together and only get one provider label.

**`example`**
//  Adding an empty section to the global panel area (`ui.areas.panel`)
const section = new ui.Section("Example Section");
ui.areas.panel.add(section);

#### Parameters

| Name | Type |
| :------ | :------ |
| `section` | `TChildren` |

#### Returns

`any`

#### Defined in

[luucy/ui.d.ts:103](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L103)
