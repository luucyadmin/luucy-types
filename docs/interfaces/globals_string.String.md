# Interface: String

[globals/string](../modules/globals_string.md).String

## Indexable

▪ [index: `number`]: `string`

## Table of contents

### Properties

- [length](globals_string.String.md#length)

### Methods

- [charAt](globals_string.String.md#charat)
- [charCodeAt](globals_string.String.md#charcodeat)
- [concat](globals_string.String.md#concat)
- [includes](globals_string.String.md#includes)
- [indexOf](globals_string.String.md#indexof)
- [lastIndexOf](globals_string.String.md#lastindexof)
- [localeCompare](globals_string.String.md#localecompare)
- [match](globals_string.String.md#match)
- [replace](globals_string.String.md#replace)
- [search](globals_string.String.md#search)
- [slice](globals_string.String.md#slice)
- [split](globals_string.String.md#split)
- [substring](globals_string.String.md#substring)
- [toLocaleLowerCase](globals_string.String.md#tolocalelowercase)
- [toLocaleUpperCase](globals_string.String.md#tolocaleuppercase)
- [toLowerCase](globals_string.String.md#tolowercase)
- [toString](globals_string.String.md#tostring)
- [toUpperCase](globals_string.String.md#touppercase)
- [trim](globals_string.String.md#trim)
- [valueOf](globals_string.String.md#valueof)

## Properties

### length

• `Readonly` **length**: `number`

Returns the length of a String object.

#### Defined in

[globals/string.d.ts:117](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L117)

## Methods

### charAt

▸ **charAt**(`pos`): `string`

Returns the character at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | `number` | The zero-based index of the desired character. |

#### Returns

`string`

#### Defined in

[globals/string.d.ts:9](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L9)

___

### charCodeAt

▸ **charCodeAt**(`index`): `number`

Returns the Unicode value of the character at the specified location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired character. If there is no character at the specified index, NaN is returned. |

#### Returns

`number`

#### Defined in

[globals/string.d.ts:15](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L15)

___

### concat

▸ **concat**(...`strings`): `string`

Returns a string that contains the concatenation of two or more strings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...strings` | `string`[] | The strings to append to the end of the string. |

#### Returns

`string`

#### Defined in

[globals/string.d.ts:21](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L21)

___

### includes

▸ **includes**(`searchString`, `position?`): `boolean`

Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | search string |
| `position?` | `number` | If position is undefined, 0 is assumed, so as to search all of the String. |

#### Returns

`boolean`

#### Defined in

[globals/string.d.ts:114](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L114)

___

### indexOf

▸ **indexOf**(`searchString`, `position?`): `number`

Returns the position of the first occurrence of a substring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | The substring to search for in the string |
| `position?` | `number` | The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. |

#### Returns

`number`

#### Defined in

[globals/string.d.ts:28](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L28)

___

### lastIndexOf

▸ **lastIndexOf**(`searchString`, `position?`): `number`

Returns the last occurrence of a substring in the string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | The substring to search for. |
| `position?` | `number` | The index at which to begin searching. If omitted, the search begins at the end of the string. |

#### Returns

`number`

#### Defined in

[globals/string.d.ts:35](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L35)

___

### localeCompare

▸ **localeCompare**(`that`): `number`

Determines whether two strings are equivalent in the current locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | `string` | String to compare to target string |

#### Returns

`number`

#### Defined in

[globals/string.d.ts:41](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L41)

___

### match

▸ **match**(`regexp`): [`RegExpMatchArray`](globals_regex.RegExpMatchArray.md)

Matches a string with a regular expression, and returns an array containing the results of that search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `string` \| [`RegExp`](../modules/globals_regex.md#regexp) | A variable name or string literal containing the regular expression pattern and flags. |

#### Returns

[`RegExpMatchArray`](globals_regex.RegExpMatchArray.md)

#### Defined in

[globals/string.d.ts:47](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L47)

___

### replace

▸ **replace**(`searchValue`, `replaceValue`): `string`

Replaces text in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| [`RegExp`](../modules/globals_regex.md#regexp) | A string to search for. |
| `replaceValue` | `string` | A string containing the text to replace for every successful match of searchValue in this string. |

#### Returns

`string`

#### Defined in

[globals/string.d.ts:54](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L54)

▸ **replace**(`searchValue`, `replacer`): `string`

Replaces text in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| [`RegExp`](../modules/globals_regex.md#regexp) | A string to search for. |
| `replacer` | (`substring`: `string`, ...`args`: `any`[]) => `string` | A function that returns the replacement text. |

#### Returns

`string`

#### Defined in

[globals/string.d.ts:61](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L61)

___

### search

▸ **search**(`regexp`): `number`

Finds the first substring match in a regular expression search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `string` \| [`RegExp`](../modules/globals_regex.md#regexp) | The regular expression pattern and applicable flags. |

#### Returns

`number`

#### Defined in

[globals/string.d.ts:67](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L67)

___

### slice

▸ **slice**(`start?`, `end?`): `string`

Returns a section of a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The index to the beginning of the specified portion of stringObj. |
| `end?` | `number` | The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj. |

#### Returns

`string`

#### Defined in

[globals/string.d.ts:75](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L75)

___

### split

▸ **split**(`separator`, `limit?`): `string`[]

Split a string into substrings using the specified separator and return them as an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator` | `string` \| [`RegExp`](../modules/globals_regex.md#regexp) | A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. |
| `limit?` | `number` | A value used to limit the number of elements returned in the array. |

#### Returns

`string`[]

#### Defined in

[globals/string.d.ts:82](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L82)

___

### substring

▸ **substring**(`start`, `end?`): `string`

Returns the substring at the specified location within a String object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based index number indicating the beginning of the substring. |
| `end?` | `number` | Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned. |

#### Returns

`string`

#### Defined in

[globals/string.d.ts:90](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L90)

___

### toLocaleLowerCase

▸ **toLocaleLowerCase**(`locales?`): `string`

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales?` | `string` \| `string`[] |

#### Returns

`string`

#### Defined in

[globals/string.d.ts:96](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L96)

___

### toLocaleUpperCase

▸ **toLocaleUpperCase**(`locales?`): `string`

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales?` | `string` \| `string`[] |

#### Returns

`string`

#### Defined in

[globals/string.d.ts:102](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L102)

___

### toLowerCase

▸ **toLowerCase**(): `string`

Converts all the alphabetic characters in a string to lowercase.

#### Returns

`string`

#### Defined in

[globals/string.d.ts:93](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L93)

___

### toString

▸ **toString**(): `string`

Returns a string representation of a string.

#### Returns

`string`

#### Defined in

[globals/string.d.ts:3](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L3)

___

### toUpperCase

▸ **toUpperCase**(): `string`

Converts all the alphabetic characters in a string to uppercase.

#### Returns

`string`

#### Defined in

[globals/string.d.ts:99](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L99)

___

### trim

▸ **trim**(): `string`

Removes the leading and trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Defined in

[globals/string.d.ts:105](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L105)

___

### valueOf

▸ **valueOf**(): `string`

Returns the primitive value of the specified object.

#### Returns

`string`

#### Defined in

[globals/string.d.ts:120](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/string.d.ts#L120)
