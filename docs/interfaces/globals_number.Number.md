# Interface: Number

[globals/number](../modules/globals_number.md).Number

## Table of contents

### Methods

- [toExponential](globals_number.Number.md#toexponential)
- [toFixed](globals_number.Number.md#tofixed)
- [toPrecision](globals_number.Number.md#toprecision)
- [toString](globals_number.Number.md#tostring)
- [valueOf](globals_number.Number.md#valueof)

## Methods

### toExponential

▸ **toExponential**(`fractionDigits?`): `string`

Returns a string containing a number represented in exponential notation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fractionDigits?` | `number` | Number of digits after the decimal point. Must be in the range 0 - 20, inclusive. |

#### Returns

`string`

#### Defined in

[globals/number.d.ts:18](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/number.d.ts#L18)

___

### toFixed

▸ **toFixed**(`fractionDigits?`): `string`

Returns a string representing a number in fixed-point notation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fractionDigits?` | `number` | Number of digits after the decimal point. Must be in the range 0 - 20, inclusive. |

#### Returns

`string`

#### Defined in

[globals/number.d.ts:12](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/number.d.ts#L12)

___

### toPrecision

▸ **toPrecision**(`precision?`): `string`

Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `precision?` | `number` | Number of significant digits. Must be in the range 1 - 21, inclusive. |

#### Returns

`string`

#### Defined in

[globals/number.d.ts:24](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/number.d.ts#L24)

___

### toString

▸ **toString**(`radix?`): `string`

Returns a string representation of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radix?` | `number` | Specifies a radix for converting numeric values to strings. This value is only used for numbers. |

#### Returns

`string`

#### Defined in

[globals/number.d.ts:6](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/number.d.ts#L6)

___

### valueOf

▸ **valueOf**(): `number`

Returns the primitive value of the specified object.

#### Returns

`number`

#### Defined in

[globals/number.d.ts:27](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/number.d.ts#L27)
