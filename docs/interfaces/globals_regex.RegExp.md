# Interface: RegExp

[globals/regex](../modules/globals_regex.md).RegExp

## Table of contents

### Properties

- [global](globals_regex.RegExp.md#global)
- [ignoreCase](globals_regex.RegExp.md#ignorecase)
- [lastIndex](globals_regex.RegExp.md#lastindex)
- [multiline](globals_regex.RegExp.md#multiline)
- [source](globals_regex.RegExp.md#source)

### Methods

- [compile](globals_regex.RegExp.md#compile)
- [exec](globals_regex.RegExp.md#exec)
- [test](globals_regex.RegExp.md#test)

## Properties

### global

• `Readonly` **global**: `boolean`

Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.

#### Defined in

[globals/regex.d.ts:18](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/regex.d.ts#L18)

___

### ignoreCase

• `Readonly` **ignoreCase**: `boolean`

Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.

#### Defined in

[globals/regex.d.ts:21](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/regex.d.ts#L21)

___

### lastIndex

• **lastIndex**: `number`

#### Defined in

[globals/regex.d.ts:26](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/regex.d.ts#L26)

___

### multiline

• `Readonly` **multiline**: `boolean`

Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.

#### Defined in

[globals/regex.d.ts:24](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/regex.d.ts#L24)

___

### source

• `Readonly` **source**: `string`

Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.

#### Defined in

[globals/regex.d.ts:15](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/regex.d.ts#L15)

## Methods

### compile

▸ **compile**(): [`RegExp`](../modules/globals_regex.md#regexp)

#### Returns

[`RegExp`](../modules/globals_regex.md#regexp)

#### Defined in

[globals/regex.d.ts:29](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/regex.d.ts#L29)

___

### exec

▸ **exec**(`string`): [`RegExpExecArray`](globals_regex.RegExpExecArray.md)

Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The String object or string literal on which to perform the search. |

#### Returns

[`RegExpExecArray`](globals_regex.RegExpExecArray.md)

#### Defined in

[globals/regex.d.ts:6](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/regex.d.ts#L6)

___

### test

▸ **test**(`string`): `boolean`

Returns a Boolean value that indicates whether or not a pattern exists in a searched string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | String on which to perform the search. |

#### Returns

`boolean`

#### Defined in

[globals/regex.d.ts:12](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/regex.d.ts#L12)
