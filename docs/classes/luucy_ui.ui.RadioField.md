# Class: RadioField<T\>

[luucy/ui](../modules/luucy_ui.md).[ui](../modules/luucy_ui.ui.md).RadioField

Radio input field

Displays multiple choices as bullet points.

**`example`**
//  Price calculation based on apartment type
const types = [
    { name: "Basic Apartment", pricePerM2: 100 },
    { name: "Standard Apartment", pricePerM2: 150 },
    { name: "Luxury Apartment", pricePerM2: 250 },
];

const area = 69;

const priceLabel = new ui.LabeledValue("Price");
section.add(area);

const typeSelect = new ui.RadioField("Apartment Type", types, types[1], type => type.name);
typeSelect.onValueChange.subscribe(type => {
    priceLabel = type.pricePerM2 * area;
});

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Element`](luucy_ui.ui.Element.md)

  ↳ **`RadioField`**

## Table of contents

### Constructors

- [constructor](luucy_ui.ui.RadioField.md#constructor)

### Properties

- [children](luucy_ui.ui.RadioField.md#children)
- [hidden](luucy_ui.ui.RadioField.md#hidden)
- [label](luucy_ui.ui.RadioField.md#label)
- [onValueChange](luucy_ui.ui.RadioField.md#onvaluechange)
- [parent](luucy_ui.ui.RadioField.md#parent)
- [value](luucy_ui.ui.RadioField.md#value)
- [visible](luucy_ui.ui.RadioField.md#visible)

### Methods

- [add](luucy_ui.ui.RadioField.md#add)
- [hide](luucy_ui.ui.RadioField.md#hide)
- [insertAfter](luucy_ui.ui.RadioField.md#insertafter)
- [insertBefore](luucy_ui.ui.RadioField.md#insertbefore)
- [remove](luucy_ui.ui.RadioField.md#remove)
- [show](luucy_ui.ui.RadioField.md#show)

## Constructors

### constructor

• **new RadioField**<`T`\>(`label`, `values`, `value?`, `transform?`)

Create a radio field

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | Describes the purpose of an input and is displayed next to the field |
| `values` | `T`[] | The values that can be seletced |
| `value?` | `T` | What is currently selected. This can be null |
| `transform?` | (`item`: `T`) => `string` | How to convert a value into a string for displaying it. |

#### Overrides

[Element](luucy_ui.ui.Element.md).[constructor](luucy_ui.ui.Element.md#constructor)

#### Defined in

[luucy/ui.d.ts:556](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L556)

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

[luucy/ui.d.ts:563](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L563)

___

### onValueChange

• **onValueChange**: [`Event`](luucy_event.Event.md)<`T`\>

The event is triggered whenever the user selects another radio.

#### Defined in

[luucy/ui.d.ts:576](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L576)

___

### parent

• `Optional` `Readonly` **parent**: [`Element`](luucy_ui.ui.Element.md) \| [`Area`](../interfaces/luucy_ui.ui.Area.md)<[`Element`](luucy_ui.ui.Element.md)\>

References the elements parent element or area

#### Inherited from

[Element](luucy_ui.ui.Element.md).[parent](luucy_ui.ui.Element.md#parent)

#### Defined in

[luucy/ui.d.ts:21](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L21)

___

### value

• **value**: `T`

The fields selected radio value.
Setting this programatically will trigger the `onValueChange` event.

Don't use `Timer`s to check for changes, use the `onValueChange` event instead!

#### Defined in

[luucy/ui.d.ts:571](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L571)

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
