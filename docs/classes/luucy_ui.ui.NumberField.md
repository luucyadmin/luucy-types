# Class: NumberField

[luucy/ui](../modules/luucy_ui.md).[ui](../modules/luucy_ui.ui.md).NumberField

Number input field

Creates a number field used for user input.

**`example`**
//  Create input
const input = new ui.TextField("Test Input", 100);
input.onValueChange.subscribe(value => {
    console.log(value);
});

section.add(input);

## Hierarchy

- [`Element`](luucy_ui.ui.Element.md)

  ↳ **`NumberField`**

## Table of contents

### Constructors

- [constructor](luucy_ui.ui.NumberField.md#constructor)

### Properties

- [children](luucy_ui.ui.NumberField.md#children)
- [hidden](luucy_ui.ui.NumberField.md#hidden)
- [label](luucy_ui.ui.NumberField.md#label)
- [onImmediateValueChange](luucy_ui.ui.NumberField.md#onimmediatevaluechange)
- [onValueChange](luucy_ui.ui.NumberField.md#onvaluechange)
- [parent](luucy_ui.ui.NumberField.md#parent)
- [placeholder](luucy_ui.ui.NumberField.md#placeholder)
- [value](luucy_ui.ui.NumberField.md#value)
- [visible](luucy_ui.ui.NumberField.md#visible)

### Methods

- [add](luucy_ui.ui.NumberField.md#add)
- [hide](luucy_ui.ui.NumberField.md#hide)
- [insertAfter](luucy_ui.ui.NumberField.md#insertafter)
- [insertBefore](luucy_ui.ui.NumberField.md#insertbefore)
- [remove](luucy_ui.ui.NumberField.md#remove)
- [show](luucy_ui.ui.NumberField.md#show)

## Constructors

### constructor

• **new NumberField**(`label`, `value?`, `placeholder?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `value?` | `number` |
| `placeholder?` | `string` |

#### Overrides

[Element](luucy_ui.ui.Element.md).[constructor](luucy_ui.ui.Element.md#constructor)

#### Defined in

[luucy/ui.d.ts:473](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L473)

## Properties

### children

• `Readonly` **children**: [`Element`](luucy_ui.ui.Element.md)[]

Contains all child elements.

Modify the children by using `add()`, `insertAfter()`, `insertBefore()` and `remove()`

#### Inherited from

[Element](luucy_ui.ui.Element.md).[children](luucy_ui.ui.Element.md#children)

#### Defined in

[luucy/ui.d.ts:16](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L16)

___

### hidden

• `Readonly` **hidden**: `any`

Indicates if the element is currently hidden.
If the element is not visible, make sure that it has been added with `.add()`!

Show a element by calling `.show()`

#### Inherited from

[Element](luucy_ui.ui.Element.md).[hidden](luucy_ui.ui.Element.md#hidden)

#### Defined in

[luucy/ui.d.ts:64](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L64)

___

### label

• **label**: `string`

Describes the purpose of an input and is displayed next to the field

Can be changed after beeing added to an area/element and will automatically update.

#### Defined in

[luucy/ui.d.ts:480](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L480)

___

### onImmediateValueChange

• **onImmediateValueChange**: [`Event`](luucy_event.Event.md)<`number`\>

The event is triggered whenever the user is changing the input.
Do not do heavy calculations, request or complex ui manipulations in here, as this event is called on every keystroke!

**`example`**
//  Calculate a price while the user is typing
const basePrice = 69;

// price labeled value
const heatingCostLabel = new ui.LabeledValue("Heating Cost");
section.add(heatingCostLabel);

// create input field
const areaInput = new ui.Input("Area");

areaInput.onImmediateValueChange.subscribe(value => {
    heatingCostLabel.value = basePrice * value;
});

#### Defined in

[luucy/ui.d.ts:521](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L521)

___

### onValueChange

• **onValueChange**: [`Event`](luucy_event.Event.md)<`number`\>

The event is triggered whenever the user changes the input.

#### Defined in

[luucy/ui.d.ts:500](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L500)

___

### parent

• `Optional` `Readonly` **parent**: [`Element`](luucy_ui.ui.Element.md) \| [`Area`](../interfaces/luucy_ui.ui.Area.md)<[`Element`](luucy_ui.ui.Element.md)\>

References the elements parent element or area

#### Inherited from

[Element](luucy_ui.ui.Element.md).[parent](luucy_ui.ui.Element.md#parent)

#### Defined in

[luucy/ui.d.ts:21](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L21)

___

### placeholder

• **placeholder**: `string`

The gray text visible in the text field when no text has been entered

Can be changed after beeing added to an area/element and will automatically update.

#### Defined in

[luucy/ui.d.ts:487](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L487)

___

### value

• **value**: `number`

The fields number as entered by the user.
Setting this programatically will trigger the `onValueChange` event.

Don't use `Timer`s to check for changes, use the `onValueChange` event instead!

#### Defined in

[luucy/ui.d.ts:495](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L495)

___

### visible

• `Readonly` **visible**: `any`

Indicates if the element is currently visible

Hide a element by calling `.hide()`

#### Inherited from

[Element](luucy_ui.ui.Element.md).[visible](luucy_ui.ui.Element.md#visible)

#### Defined in

[luucy/ui.d.ts:56](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L56)

## Methods

### add

▸ **add**(`element`): `any`

Appends an element as a child

**`example`**
//  Creating a section and adding a label to it
const section = new ui.Section("Example Section");
ui.areas.panel.add(section);

const label = new ui.Label("Hello World");
section.add(label);

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`Element`](luucy_ui.ui.Element.md) |

#### Returns

`any`

#### Inherited from

[Element](luucy_ui.ui.Element.md).[add](luucy_ui.ui.Element.md#add)

#### Defined in

[luucy/ui.d.ts:34](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L34)

___

### hide

▸ **hide**(): `any`

Hides an element from the view.
Elements can be removed by calling `.remove(element)` on the parent.

The element can be shown again by calling `.show()`.
This will change `.visible` and `.hidden`

#### Returns

`any`

#### Inherited from

[Element](luucy_ui.ui.Element.md).[hide](luucy_ui.ui.Element.md#hide)

#### Defined in

[luucy/ui.d.ts:82](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L82)

___

### insertAfter

▸ **insertAfter**(`child`, `after`): `any`

Appends an element as a child after the reference element

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Element`](luucy_ui.ui.Element.md) |
| `after` | [`Element`](luucy_ui.ui.Element.md) |

#### Returns

`any`

#### Inherited from

[Element](luucy_ui.ui.Element.md).[insertAfter](luucy_ui.ui.Element.md#insertafter)

#### Defined in

[luucy/ui.d.ts:39](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L39)

___

### insertBefore

▸ **insertBefore**(`child`, `before`): `any`

Appends an element as a child before the reference element

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Element`](luucy_ui.ui.Element.md) |
| `before` | [`Element`](luucy_ui.ui.Element.md) |

#### Returns

`any`

#### Inherited from

[Element](luucy_ui.ui.Element.md).[insertBefore](luucy_ui.ui.Element.md#insertbefore)

#### Defined in

[luucy/ui.d.ts:44](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L44)

___

### remove

▸ **remove**(`child`): `any`

Removes an element as a child

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Element`](luucy_ui.ui.Element.md) |

#### Returns

`any`

#### Inherited from

[Element](luucy_ui.ui.Element.md).[remove](luucy_ui.ui.Element.md#remove)

#### Defined in

[luucy/ui.d.ts:49](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L49)

___

### show

▸ **show**(): `any`

Makes an element visible after beeing hidden with `.hide()`.
If the element is not visible, make sure that it has been added with `.add()`!

The element can be hidden again by calling `.hide()`.
This will change `.visible` and `.hidden`

#### Returns

`any`

#### Inherited from

[Element](luucy_ui.ui.Element.md).[show](luucy_ui.ui.Element.md#show)

#### Defined in

[luucy/ui.d.ts:73](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L73)
