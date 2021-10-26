# Interface: JSON

[globals/json](../modules/globals_json.md).JSON

## Table of contents

### Methods

- [parse](globals_json.JSON.md#parse)
- [stringify](globals_json.JSON.md#stringify)

## Methods

### parse

▸ **parse**(`text`, `reviver?`): `any`

Converts a JavaScript Object Notation (JSON) string into an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | A valid JSON string. |
| `reviver?` | (`key`: `string`, `value`: `any`) => `any` | A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is. |

#### Returns

`any`

#### Defined in

[globals/json.d.ts:8](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/json.d.ts#L8)

___

### stringify

▸ **stringify**(`value`, `replacer?`, `space?`): `string`

Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | A JavaScript value, usually an object or array, to be converted. |
| `replacer?` | (`key`: `string`, `value`: `any`) => `any` | A function that transforms the results. |
| `space?` | `string` \| `number` | Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read. |

#### Returns

`string`

#### Defined in

[globals/json.d.ts:15](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/json.d.ts#L15)

▸ **stringify**(`value`, `replacer?`, `space?`): `string`

Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | A JavaScript value, usually an object or array, to be converted. |
| `replacer?` | (`string` \| `number`)[] | An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified. |
| `space?` | `string` \| `number` | Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read. |

#### Returns

`string`

#### Defined in

[globals/json.d.ts:22](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/json.d.ts#L22)
