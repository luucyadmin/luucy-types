# Interface: RegExpMatchArray

[globals/regex](../modules/globals_regex.md).RegExpMatchArray

## Hierarchy

- [`Array`](../modules/globals_array.md#array)<`string`\>

  ↳ **`RegExpMatchArray`**

## Table of contents

### Properties

- [index](globals_regex.RegExpMatchArray.md#index)
- [input](globals_regex.RegExpMatchArray.md#input)
- [length](globals_regex.RegExpMatchArray.md#length)

### Methods

- [concat](globals_regex.RegExpMatchArray.md#concat)
- [every](globals_regex.RegExpMatchArray.md#every)
- [filter](globals_regex.RegExpMatchArray.md#filter)
- [forEach](globals_regex.RegExpMatchArray.md#foreach)
- [indexOf](globals_regex.RegExpMatchArray.md#indexof)
- [join](globals_regex.RegExpMatchArray.md#join)
- [lastIndexOf](globals_regex.RegExpMatchArray.md#lastindexof)
- [map](globals_regex.RegExpMatchArray.md#map)
- [pop](globals_regex.RegExpMatchArray.md#pop)
- [push](globals_regex.RegExpMatchArray.md#push)
- [reduce](globals_regex.RegExpMatchArray.md#reduce)
- [reduceRight](globals_regex.RegExpMatchArray.md#reduceright)
- [reverse](globals_regex.RegExpMatchArray.md#reverse)
- [shift](globals_regex.RegExpMatchArray.md#shift)
- [slice](globals_regex.RegExpMatchArray.md#slice)
- [some](globals_regex.RegExpMatchArray.md#some)
- [sort](globals_regex.RegExpMatchArray.md#sort)
- [splice](globals_regex.RegExpMatchArray.md#splice)
- [toLocaleString](globals_regex.RegExpMatchArray.md#tolocalestring)
- [toString](globals_regex.RegExpMatchArray.md#tostring)
- [unshift](globals_regex.RegExpMatchArray.md#unshift)

## Properties

### index

• `Optional` **index**: `number`

#### Defined in

[globals/regex.d.ts:38](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/regex.d.ts#L38)

___

### input

• `Optional` **input**: `string`

#### Defined in

[globals/regex.d.ts:39](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/regex.d.ts#L39)

___

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

[globals/array.d.ts:5](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L5)

## Methods

### concat

▸ **concat**(...`items`): `string`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`ConcatArray`](globals_array.ConcatArray.md)<`string`\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`string`[]

#### Inherited from

Array.concat

#### Defined in

[globals/array.d.ts:29](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L29)

▸ **concat**(...`items`): `string`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | (`string` \| [`ConcatArray`](globals_array.ConcatArray.md)<`string`\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`string`[]

#### Inherited from

Array.concat

#### Defined in

[globals/array.d.ts:35](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L35)

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

[globals/array.d.ts:112](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L112)

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

[globals/array.d.ts:121](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L121)

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

[globals/array.d.ts:148](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L148)

▸ **filter**(`predicate`, `thisArg?`): `string`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`string`[]

#### Inherited from

Array.filter

#### Defined in

[globals/array.d.ts:154](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L154)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

[globals/array.d.ts:136](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L136)

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `string` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

[globals/array.d.ts:97](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L97)

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

[globals/array.d.ts:40](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L40)

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `string` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

[globals/array.d.ts:103](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L103)

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

[globals/array.d.ts:142](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L142)

___

### pop

▸ **pop**(): `string`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`string`

#### Inherited from

Array.pop

#### Defined in

[globals/array.d.ts:18](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L18)

___

### push

▸ **push**(...`items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `string`[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

[globals/array.d.ts:23](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L23)

___

### reduce

▸ **reduce**(`callbackfn`): `string`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`string`

#### Inherited from

Array.reduce

#### Defined in

[globals/array.d.ts:160](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L160)

▸ **reduce**(`callbackfn`, `initialValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string` |
| `initialValue` | `string` |

#### Returns

`string`

#### Inherited from

Array.reduce

#### Defined in

[globals/array.d.ts:161](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L161)

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

[globals/array.d.ts:167](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L167)

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `string`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`string`

#### Inherited from

Array.reduceRight

#### Defined in

[globals/array.d.ts:173](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L173)

▸ **reduceRight**(`callbackfn`, `initialValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string` |
| `initialValue` | `string` |

#### Returns

`string`

#### Inherited from

Array.reduceRight

#### Defined in

[globals/array.d.ts:174](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L174)

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

[globals/array.d.ts:180](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L180)

___

### reverse

▸ **reverse**(): `string`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`string`[]

#### Inherited from

Array.reverse

#### Defined in

[globals/array.d.ts:45](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L45)

___

### shift

▸ **shift**(): `string`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`string`

#### Inherited from

Array.shift

#### Defined in

[globals/array.d.ts:50](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L50)

___

### slice

▸ **slice**(`start?`, `end?`): `string`[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

`string`[]

#### Inherited from

Array.slice

#### Defined in

[globals/array.d.ts:60](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L60)

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

[globals/array.d.ts:130](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L130)

___

### sort

▸ **sort**(`compareFn?`): [`RegExpMatchArray`](globals_regex.RegExpMatchArray.md)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `string`, `b`: `string`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`RegExpMatchArray`](globals_regex.RegExpMatchArray.md)

#### Inherited from

Array.sort

#### Defined in

[globals/array.d.ts:71](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L71)

___

### splice

▸ **splice**(`start`, `deleteCount?`): `string`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

`string`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

[globals/array.d.ts:78](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L78)

▸ **splice**(`start`, `deleteCount`, ...`items`): `string`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | `string`[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

`string`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

[globals/array.d.ts:86](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L86)

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

[globals/array.d.ts:13](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L13)

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

[globals/array.d.ts:9](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L9)

___

### unshift

▸ **unshift**(...`items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `string`[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

[globals/array.d.ts:91](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/array.d.ts#L91)
