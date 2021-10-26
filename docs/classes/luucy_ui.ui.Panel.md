# Class: Panel

[luucy/ui](../modules/luucy_ui.md).[ui](../modules/luucy_ui.ui.md).Panel

Panel

Creates a right panel. The panel will only be displayed when `.open()` is called.
Do not automatically open a panels, wait for user input!

**`example`**
//  Creating a panel and a button to open it
const panel = new ui.Panel("Test Panel");
const label = new ui.Label();

panel.add(label);

const button = new ui.Button("Open Panel", () => {
    label.content = `Opened at: ${new Date().toString()}`;

    panel.open();
});

## Implements

- [`Area`](../interfaces/luucy_ui.ui.Area.md)<[`Element`](luucy_ui.ui.Element.md)\>

## Table of contents

### Constructors

- [constructor](luucy_ui.ui.Panel.md#constructor)

### Methods

- [add](luucy_ui.ui.Panel.md#add)
- [close](luucy_ui.ui.Panel.md#close)
- [open](luucy_ui.ui.Panel.md#open)

## Constructors

### constructor

• **new Panel**(`name`)

Creates a panel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The panels name. Can't be changed after the panel has been created. |

#### Defined in

[luucy/ui.d.ts:362](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L362)

## Methods

### add

▸ **add**(`element`): `any`

Add an element to the panel

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`Element`](luucy_ui.ui.Element.md) |

#### Returns

`any`

#### Implementation of

[Area](../interfaces/luucy_ui.ui.Area.md).[add](../interfaces/luucy_ui.ui.Area.md#add)

#### Defined in

[luucy/ui.d.ts:382](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L382)

___

### close

▸ **close**(): `any`

Closes the panel

The panel can be opened again by calling `.open()`

#### Returns

`any`

#### Defined in

[luucy/ui.d.ts:377](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L377)

___

### open

▸ **open**(): `any`

Opens the panel

Do not open the panel automatically! Please wait for user input, eg. a button press!
The panel can be closed programatically by calling `.close()`

#### Returns

`any`

#### Defined in

[luucy/ui.d.ts:370](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L370)
