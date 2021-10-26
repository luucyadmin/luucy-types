# Interface: Math

[globals/math](../modules/globals_math.md).Math

## Table of contents

### Properties

- [E](globals_math.Math.md#e)
- [LN10](globals_math.Math.md#ln10)
- [LN2](globals_math.Math.md#ln2)
- [LOG10E](globals_math.Math.md#log10e)
- [LOG2E](globals_math.Math.md#log2e)
- [PI](globals_math.Math.md#pi)
- [SQRT1\_2](globals_math.Math.md#sqrt1_2)
- [SQRT2](globals_math.Math.md#sqrt2)

### Methods

- [abs](globals_math.Math.md#abs)
- [acos](globals_math.Math.md#acos)
- [asin](globals_math.Math.md#asin)
- [atan](globals_math.Math.md#atan)
- [atan2](globals_math.Math.md#atan2)
- [ceil](globals_math.Math.md#ceil)
- [cos](globals_math.Math.md#cos)
- [exp](globals_math.Math.md#exp)
- [floor](globals_math.Math.md#floor)
- [log](globals_math.Math.md#log)
- [max](globals_math.Math.md#max)
- [min](globals_math.Math.md#min)
- [pow](globals_math.Math.md#pow)
- [random](globals_math.Math.md#random)
- [round](globals_math.Math.md#round)
- [sin](globals_math.Math.md#sin)
- [sqrt](globals_math.Math.md#sqrt)
- [tan](globals_math.Math.md#tan)

## Properties

### E

• `Readonly` **E**: `number`

The mathematical constant e. This is Euler's number, the base of natural logarithms.

#### Defined in

[globals/math.d.ts:3](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L3)

___

### LN10

• `Readonly` **LN10**: `number`

The natural logarithm of 10.

#### Defined in

[globals/math.d.ts:5](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L5)

___

### LN2

• `Readonly` **LN2**: `number`

The natural logarithm of 2.

#### Defined in

[globals/math.d.ts:7](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L7)

___

### LOG10E

• `Readonly` **LOG10E**: `number`

The base-10 logarithm of e.

#### Defined in

[globals/math.d.ts:11](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L11)

___

### LOG2E

• `Readonly` **LOG2E**: `number`

The base-2 logarithm of e.

#### Defined in

[globals/math.d.ts:9](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L9)

___

### PI

• `Readonly` **PI**: `number`

Pi. This is the ratio of the circumference of a circle to its diameter.

#### Defined in

[globals/math.d.ts:13](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L13)

___

### SQRT1\_2

• `Readonly` **SQRT1\_2**: `number`

The square root of 0.5, or, equivalently, one divided by the square root of 2.

#### Defined in

[globals/math.d.ts:15](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L15)

___

### SQRT2

• `Readonly` **SQRT2**: `number`

The square root of 2.

#### Defined in

[globals/math.d.ts:17](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L17)

## Methods

### abs

▸ **abs**(`x`): `number`

Returns the absolute value of a number (the value without regard to whether it is positive or negative).
For example, the absolute value of -5 is the same as the absolute value of 5.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A numeric expression for which the absolute value is needed. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:23](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L23)

___

### acos

▸ **acos**(`x`): `number`

Returns the arc cosine (or inverse cosine) of a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A numeric expression. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:28](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L28)

___

### asin

▸ **asin**(`x`): `number`

Returns the arcsine of a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A numeric expression. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:33](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L33)

___

### atan

▸ **atan**(`x`): `number`

Returns the arctangent of a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A numeric expression for which the arctangent is needed. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:38](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L38)

___

### atan2

▸ **atan2**(`y`, `x`): `number`

Returns the angle (in radians) from the X axis to a point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` | A numeric expression representing the cartesian y-coordinate. |
| `x` | `number` | A numeric expression representing the cartesian x-coordinate. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:44](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L44)

___

### ceil

▸ **ceil**(`x`): `number`

Returns the smallest integer greater than or equal to its numeric argument.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A numeric expression. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:49](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L49)

___

### cos

▸ **cos**(`x`): `number`

Returns the cosine of a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A numeric expression that contains an angle measured in radians. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:54](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L54)

___

### exp

▸ **exp**(`x`): `number`

Returns e (the base of natural logarithms) raised to a power.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A numeric expression representing the power of e. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:59](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L59)

___

### floor

▸ **floor**(`x`): `number`

Returns the greatest integer less than or equal to its numeric argument.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A numeric expression. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:64](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L64)

___

### log

▸ **log**(`x`): `number`

Returns the natural logarithm (base e) of a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A numeric expression. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:69](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L69)

___

### max

▸ **max**(...`values`): `number`

Returns the larger of a set of supplied numeric expressions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | `number`[] | Numeric expressions to be evaluated. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:74](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L74)

___

### min

▸ **min**(...`values`): `number`

Returns the smaller of a set of supplied numeric expressions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | `number`[] | Numeric expressions to be evaluated. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:79](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L79)

___

### pow

▸ **pow**(`x`, `y`): `number`

Returns the value of a base expression taken to a specified power.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The base value of the expression. |
| `y` | `number` | The exponent value of the expression. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:85](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L85)

___

### random

▸ **random**(): `number`

Returns a pseudorandom number between 0 and 1.

#### Returns

`number`

#### Defined in

[globals/math.d.ts:87](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L87)

___

### round

▸ **round**(`x`): `number`

Returns a supplied numeric expression rounded to the nearest integer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The value to be rounded to the nearest integer. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:92](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L92)

___

### sin

▸ **sin**(`x`): `number`

Returns the sine of a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A numeric expression that contains an angle measured in radians. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:97](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L97)

___

### sqrt

▸ **sqrt**(`x`): `number`

Returns the square root of a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A numeric expression. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:102](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L102)

___

### tan

▸ **tan**(`x`): `number`

Returns the tangent of a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A numeric expression that contains an angle measured in radians. |

#### Returns

`number`

#### Defined in

[globals/math.d.ts:107](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/math.d.ts#L107)
