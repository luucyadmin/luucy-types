# Interface: Object

[globals/object](../modules/globals_object.md).Object

## Table of contents

### Methods

- [hasOwnProperty](globals_object.Object.md#hasownproperty)
- [isPrototypeOf](globals_object.Object.md#isprototypeof)
- [propertyIsEnumerable](globals_object.Object.md#propertyisenumerable)
- [toLocaleString](globals_object.Object.md#tolocalestring)
- [toString](globals_object.Object.md#tostring)
- [valueOf](globals_object.Object.md#valueof)

## Methods

### hasOwnProperty

▸ **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `string` \| `number` \| `symbol` | A property name. |

#### Returns

`boolean`

#### Defined in

[globals/object.d.ts:35](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L35)

___

### isPrototypeOf

▸ **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Object`](../modules/globals_object.md#object) | Another object whose prototype chain is to be checked. |

#### Returns

`boolean`

#### Defined in

[globals/object.d.ts:41](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L41)

___

### propertyIsEnumerable

▸ **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `string` \| `number` \| `symbol` | A property name. |

#### Returns

`boolean`

#### Defined in

[globals/object.d.ts:47](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L47)

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Defined in

[globals/object.d.ts:26](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L26)

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

[globals/object.d.ts:23](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L23)

___

### valueOf

▸ **valueOf**(): [`Object`](../modules/globals_object.md#object)

Returns the primitive value of the specified object.

#### Returns

[`Object`](../modules/globals_object.md#object)

#### Defined in

[globals/object.d.ts:29](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L29)
