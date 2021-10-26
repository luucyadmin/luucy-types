# Module: globals/string

## Table of contents

### Interfaces

- [String](../interfaces/globals_string.String.md)
- [StringConstructor](../interfaces/globals_string.StringConstructor.md)

### Variables

- [String](globals_string.md#string)

### Functions

- [decodeURI](globals_string.md#decodeuri)
- [decodeURIComponent](globals_string.md#decodeuricomponent)
- [encodeURI](globals_string.md#encodeuri)
- [encodeURIComponent](globals_string.md#encodeuricomponent)

## Variables

### String

• **String**: [`StringConstructor`](../interfaces/globals_string.StringConstructor.md)

Allows manipulation and formatting of text strings and determination and location of substrings within strings.

#### Defined in

[globals/string.d.ts:135](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L135)

## Functions

### decodeURI

▸ **decodeURI**(`encodedURI`): `string`

Gets the unencoded version of an encoded Uniform Resource Identifier (URI).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encodedURI` | `string` | A value representing an encoded URI. |

#### Returns

`string`

#### Defined in

[globals/string.d.ts:141](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L141)

___

### decodeURIComponent

▸ **decodeURIComponent**(`encodedURIComponent`): `string`

Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encodedURIComponent` | `string` | A value representing an encoded URI component. |

#### Returns

`string`

#### Defined in

[globals/string.d.ts:147](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L147)

___

### encodeURI

▸ **encodeURI**(`uri`): `string`

Encodes a text string as a valid Uniform Resource Identifier (URI)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uri` | `string` | A value representing an encoded URI. |

#### Returns

`string`

#### Defined in

[globals/string.d.ts:153](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L153)

___

### encodeURIComponent

▸ **encodeURIComponent**(`uriComponent`): `string`

Encodes a text string as a valid component of a Uniform Resource Identifier (URI).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uriComponent` | `string` \| `number` \| `boolean` | A value representing an encoded URI component. |

#### Returns

`string`

#### Defined in

[globals/string.d.ts:159](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L159)
