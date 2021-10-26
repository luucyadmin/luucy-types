# Interface: DateConstructor

[globals/date](../modules/globals_date.md).DateConstructor

## Callable

### DateConstructor

▸ **DateConstructor**(): `string`

#### Returns

`string`

#### Defined in

[globals/date.d.ts:159](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/date.d.ts#L159)

## Table of contents

### Constructors

- [constructor](globals_date.DateConstructor.md#constructor)

### Properties

- [prototype](globals_date.DateConstructor.md#prototype)

### Methods

- [UTC](globals_date.DateConstructor.md#utc)
- [now](globals_date.DateConstructor.md#now)
- [parse](globals_date.DateConstructor.md#parse)

## Constructors

### constructor

• **new DateConstructor**()

#### Defined in

[globals/date.d.ts:156](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/date.d.ts#L156)

• **new DateConstructor**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Defined in

[globals/date.d.ts:157](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/date.d.ts#L157)

• **new DateConstructor**(`year`, `month`, `date?`, `hours?`, `minutes?`, `seconds?`, `ms?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `month` | `number` |
| `date?` | `number` |
| `hours?` | `number` |
| `minutes?` | `number` |
| `seconds?` | `number` |
| `ms?` | `number` |

#### Defined in

[globals/date.d.ts:158](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/date.d.ts#L158)

## Properties

### prototype

• `Readonly` **prototype**: [`Date`](../modules/globals_date.md#date)

#### Defined in

[globals/date.d.ts:160](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/date.d.ts#L160)

## Methods

### UTC

▸ **UTC**(`year`, `month`, `date?`, `hours?`, `minutes?`, `seconds?`, `ms?`): `number`

Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year. |
| `month` | `number` | The month as a number between 0 and 11 (January to December). |
| `date?` | `number` | The date as a number between 1 and 31. |
| `hours?` | `number` | Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour. |
| `minutes?` | `number` | Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes. |
| `seconds?` | `number` | Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds. |
| `ms?` | `number` | A number from 0 to 999 that specifies the milliseconds. |

#### Returns

`number`

#### Defined in

[globals/date.d.ts:176](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/date.d.ts#L176)

___

### now

▸ **now**(): `number`

#### Returns

`number`

#### Defined in

[globals/date.d.ts:177](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/date.d.ts#L177)

___

### parse

▸ **parse**(`s`): `number`

Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | A date string |

#### Returns

`number`

#### Defined in

[globals/date.d.ts:165](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/date.d.ts#L165)
