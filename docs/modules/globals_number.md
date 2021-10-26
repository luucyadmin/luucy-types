# Module: globals/number

## Table of contents

### Interfaces

- [Number](../interfaces/globals_number.Number.md)
- [NumberConstructor](../interfaces/globals_number.NumberConstructor.md)

### Variables

- [Infinity](globals_number.md#infinity)
- [NaN](globals_number.md#nan)
- [Number](globals_number.md#number)

### Functions

- [isFinite](globals_number.md#isfinite)
- [isNaN](globals_number.md#isnan)
- [parseFloat](globals_number.md#parsefloat)
- [parseInt](globals_number.md#parseint)

## Variables

### Infinity

• **Infinity**: `number`

#### Defined in

[globals/number.d.ts:92](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/number.d.ts#L92)

___

### NaN

• **NaN**: `number`

#### Defined in

[globals/number.d.ts:91](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/number.d.ts#L91)

___

### Number

• **Number**: [`NumberConstructor`](../interfaces/globals_number.NumberConstructor.md)

An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.

#### Defined in

[globals/number.d.ts:61](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/number.d.ts#L61)

## Functions

### isFinite

▸ **isFinite**(`number`): `boolean`

Determines whether a supplied number is finite.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | Any numeric value. |

#### Returns

`boolean`

#### Defined in

[globals/number.d.ts:88](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/number.d.ts#L88)

___

### isNaN

▸ **isNaN**(`number`): `boolean`

Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | A numeric value. |

#### Returns

`boolean`

#### Defined in

[globals/number.d.ts:82](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/number.d.ts#L82)

___

### parseFloat

▸ **parseFloat**(`string`): `number`

Converts a string to a floating-point number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | A string that contains a floating-point number. |

#### Returns

`number`

#### Defined in

[globals/number.d.ts:76](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/number.d.ts#L76)

___

### parseInt

▸ **parseInt**(`string`, `radix?`): `number`

Converts a string to an integer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | A string to convert into a number. |
| `radix?` | `number` | A value between 2 and 36 that specifies the base of the number in `string`. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal. |

#### Returns

`number`

#### Defined in

[globals/number.d.ts:70](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/number.d.ts#L70)
