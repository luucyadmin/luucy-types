# Class: Section

[luucy/ui](../modules/luucy_ui.md).[ui](../modules/luucy_ui.ui.md).Section

Section

As used in panels, compareable to "Data & usage", "Compare variants", ...

**`example`**
//  Creating a section with a label, adding it to the left panel
const section = new ui.Section("Test Section");
ui.areas.panel.add(section);

const label = new ui.Label("Test Label");
section.add(label);

## Hierarchy

- [`Element`](luucy_ui.ui.Element.md)

  ↳ **`Section`**

## Table of contents

### Constructors

- [constructor](luucy_ui.ui.Section.md#constructor)

### Properties

- [children](luucy_ui.ui.Section.md#children)
- [hidden](luucy_ui.ui.Section.md#hidden)
- [parent](luucy_ui.ui.Section.md#parent)
- [visible](luucy_ui.ui.Section.md#visible)

### Methods

- [add](luucy_ui.ui.Section.md#add)
- [hide](luucy_ui.ui.Section.md#hide)
- [insertAfter](luucy_ui.ui.Section.md#insertafter)
- [insertBefore](luucy_ui.ui.Section.md#insertbefore)
- [remove](luucy_ui.ui.Section.md#remove)
- [show](luucy_ui.ui.Section.md#show)

## Constructors

### constructor

• **new Section**(`name`)

Creates a section

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the section. Can't be changed after creating the section. |

#### Overrides

[Element](luucy_ui.ui.Element.md).[constructor](luucy_ui.ui.Element.md#constructor)

#### Defined in

[luucy/ui.d.ts:314](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L314)

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

### parent

• `Optional` `Readonly` **parent**: [`Element`](luucy_ui.ui.Element.md) \| [`Area`](../interfaces/luucy_ui.ui.Area.md)<[`Element`](luucy_ui.ui.Element.md)\>

References the elements parent element or area

#### Inherited from

[Element](luucy_ui.ui.Element.md).[parent](luucy_ui.ui.Element.md#parent)

#### Defined in

[luucy/ui.d.ts:21](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L21)

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
