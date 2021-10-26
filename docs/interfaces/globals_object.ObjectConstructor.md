# Interface: ObjectConstructor

[globals/object](../modules/globals_object.md).ObjectConstructor

## Callable

### ObjectConstructor

▸ **ObjectConstructor**(): `any`

#### Returns

`any`

#### Defined in

[globals/object.d.ts:52](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L52)

### ObjectConstructor

▸ **ObjectConstructor**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[globals/object.d.ts:53](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L53)

## Table of contents

### Constructors

- [constructor](globals_object.ObjectConstructor.md#constructor)

### Properties

- [prototype](globals_object.ObjectConstructor.md#prototype)

### Methods

- [create](globals_object.ObjectConstructor.md#create)
- [defineProperties](globals_object.ObjectConstructor.md#defineproperties)
- [defineProperty](globals_object.ObjectConstructor.md#defineproperty)
- [freeze](globals_object.ObjectConstructor.md#freeze)
- [getOwnPropertyDescriptor](globals_object.ObjectConstructor.md#getownpropertydescriptor)
- [getOwnPropertyNames](globals_object.ObjectConstructor.md#getownpropertynames)
- [getPrototypeOf](globals_object.ObjectConstructor.md#getprototypeof)
- [isExtensible](globals_object.ObjectConstructor.md#isextensible)
- [isFrozen](globals_object.ObjectConstructor.md#isfrozen)
- [isSealed](globals_object.ObjectConstructor.md#issealed)
- [keys](globals_object.ObjectConstructor.md#keys)
- [preventExtensions](globals_object.ObjectConstructor.md#preventextensions)
- [seal](globals_object.ObjectConstructor.md#seal)

## Constructors

### constructor

• **new ObjectConstructor**(`value?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Defined in

[globals/object.d.ts:51](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L51)

## Properties

### prototype

• `Readonly` **prototype**: [`Object`](../modules/globals_object.md#object)

A reference to the prototype for a class of objects.

#### Defined in

[globals/object.d.ts:56](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L56)

## Methods

### create

▸ **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object to use as a prototype. May be null. |

#### Returns

`any`

#### Defined in

[globals/object.d.ts:83](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L83)

▸ **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object to use as a prototype. May be null |
| `properties` | [`PropertyDescriptorMap`](globals_object.PropertyDescriptorMap.md) & [`ThisType`](globals_object.ThisType.md)<`any`\> | JavaScript object that contains one or more property descriptors. |

#### Returns

`any`

#### Defined in

[globals/object.d.ts:90](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L90)

___

### defineProperties

▸ **defineProperties**<`T`\>(`o`, `properties`): `T`

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object. |
| `properties` | [`PropertyDescriptorMap`](globals_object.PropertyDescriptorMap.md) & [`ThisType`](globals_object.ThisType.md)<`any`\> | JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property. |

#### Returns

`T`

#### Defined in

[globals/object.d.ts:105](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L105)

___

### defineProperty

▸ **defineProperty**<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object. |
| `p` | `string` \| `number` \| `symbol` | The property name. |
| `attributes` | [`PropertyDescriptor`](globals_object.PropertyDescriptor.md) & [`ThisType`](globals_object.ThisType.md)<`any`\> | Descriptor for the property. It can be for a data property or an accessor property. |

#### Returns

`T`

#### Defined in

[globals/object.d.ts:98](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L98)

___

### freeze

▸ **freeze**<`T`\>(`a`): `T`[]

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |

#### Returns

`T`[]

#### Defined in

[globals/object.d.ts:117](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L117)

___

### getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`o`, `p`): [`PropertyDescriptor`](globals_object.PropertyDescriptor.md)

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the property. |
| `p` | `string` \| `number` \| `symbol` | Name of the property. |

#### Returns

[`PropertyDescriptor`](globals_object.PropertyDescriptor.md)

#### Defined in

[globals/object.d.ts:70](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L70)

___

### getOwnPropertyNames

▸ **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the own properties. |

#### Returns

`string`[]

#### Defined in

[globals/object.d.ts:77](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L77)

___

### getPrototypeOf

▸ **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object that references the prototype. |

#### Returns

`any`

#### Defined in

[globals/object.d.ts:62](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L62)

___

### isExtensible

▸ **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Defined in

[globals/object.d.ts:141](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L141)

___

### isFrozen

▸ **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Defined in

[globals/object.d.ts:135](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L135)

___

### isSealed

▸ **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Defined in

[globals/object.d.ts:129](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L129)

___

### keys

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Defined in

[globals/object.d.ts:147](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L147)

___

### preventExtensions

▸ **preventExtensions**<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object to make non-extensible. |

#### Returns

`T`

#### Defined in

[globals/object.d.ts:123](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L123)

___

### seal

▸ **seal**<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Defined in

[globals/object.d.ts:111](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/object.d.ts#L111)
