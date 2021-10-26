# Class: Event<T\>

[luucy/event](../modules/luucy_event.md).Event

Events

Luucy pushes various events to plugins to inform them about changes in the applications state.

**`example`**
// Get notified when the user changes the project
onProjectSelect.subscribe(project => {
    console.log("project selected: ", project);
});

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](luucy_event.Event.md#constructor)

### Methods

- [emit](luucy_event.Event.md#emit)
- [subscribe](luucy_event.Event.md#subscribe)
- [subscribe](luucy_event.Event.md#subscribe)

## Constructors

### constructor

• **new Event**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

## Methods

### emit

▸ **emit**(`value`): `any`

Emits a new value

Will execute all handlers registered with `.subscribe(handler)`.
After calling `.emit(value)`, all new subscribers will automatically be executed after calling `.subscribe(handler)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`any`

#### Defined in

[luucy/event.d.ts:29](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/event.d.ts#L29)

___

### subscribe

▸ **subscribe**(`handler`): `any`

Subscribe to event

The handler will be executed whenever a new value is emitted with `.emit(value)` and
immediately after you subscribe - if there has been a `.emit(value)` call before.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventHandler`](../modules/luucy_event.md#eventhandler)<`T`\> |

#### Returns

`any`

#### Defined in

[luucy/event.d.ts:21](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/event.d.ts#L21)

___

### subscribe

▸ `Static` **subscribe**<`T`\>(`event1`, `handler`): `any`

Subscribe to multiple events at once

Will call `handler` whenever any of the events fires

**`example`**
//  Notifiy when a input value or immediate value changes
const input = new ui.TextField("Example Field");
Event.subscribe(input.onValueChange, input.onImmediateValueChange, value => {
    console.log("Change", value);
});

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event1` | [`Event`](luucy_event.Event.md)<`T`\> |
| `handler` | [`EventHandler`](../modules/luucy_event.md#eventhandler)<`T`\> |

#### Returns

`any`

#### Defined in

[luucy/event.d.ts:43](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/event.d.ts#L43)

▸ `Static` **subscribe**<`T`\>(`event1`, `event2`, `handler`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event1` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event2` | [`Event`](luucy_event.Event.md)<`T`\> |
| `handler` | [`EventHandler`](../modules/luucy_event.md#eventhandler)<`T`\> |

#### Returns

`any`

#### Defined in

[luucy/event.d.ts:44](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/event.d.ts#L44)

▸ `Static` **subscribe**<`T`\>(`event1`, `event2`, `event3`, `handler`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event1` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event2` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event3` | [`Event`](luucy_event.Event.md)<`T`\> |
| `handler` | [`EventHandler`](../modules/luucy_event.md#eventhandler)<`T`\> |

#### Returns

`any`

#### Defined in

[luucy/event.d.ts:45](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/event.d.ts#L45)

▸ `Static` **subscribe**<`T`\>(`event1`, `event2`, `event3`, `event4`, `handler`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event1` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event2` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event3` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event4` | [`Event`](luucy_event.Event.md)<`T`\> |
| `handler` | [`EventHandler`](../modules/luucy_event.md#eventhandler)<`T`\> |

#### Returns

`any`

#### Defined in

[luucy/event.d.ts:46](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/event.d.ts#L46)

▸ `Static` **subscribe**<`T`\>(`event1`, `event2`, `event3`, `event4`, `event5`, `handler`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event1` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event2` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event3` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event4` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event5` | [`Event`](luucy_event.Event.md)<`T`\> |
| `handler` | [`EventHandler`](../modules/luucy_event.md#eventhandler)<`T`\> |

#### Returns

`any`

#### Defined in

[luucy/event.d.ts:47](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/event.d.ts#L47)

▸ `Static` **subscribe**<`T`\>(`event1`, `event2`, `event3`, `event4`, `event5`, `event6`, `handler`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event1` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event2` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event3` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event4` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event5` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event6` | [`Event`](luucy_event.Event.md)<`T`\> |
| `handler` | [`EventHandler`](../modules/luucy_event.md#eventhandler)<`T`\> |

#### Returns

`any`

#### Defined in

[luucy/event.d.ts:48](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/event.d.ts#L48)

▸ `Static` **subscribe**<`T`\>(`event1`, `event2`, `event3`, `event4`, `event5`, `event6`, `event7`, `handler`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event1` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event2` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event3` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event4` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event5` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event6` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event7` | [`Event`](luucy_event.Event.md)<`T`\> |
| `handler` | [`EventHandler`](../modules/luucy_event.md#eventhandler)<`T`\> |

#### Returns

`any`

#### Defined in

[luucy/event.d.ts:49](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/event.d.ts#L49)

▸ `Static` **subscribe**<`T`\>(`event1`, `event2`, `event3`, `event4`, `event5`, `event6`, `event7`, `event8`, `handler`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event1` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event2` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event3` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event4` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event5` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event6` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event7` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event8` | [`Event`](luucy_event.Event.md)<`T`\> |
| `handler` | [`EventHandler`](../modules/luucy_event.md#eventhandler)<`T`\> |

#### Returns

`any`

#### Defined in

[luucy/event.d.ts:50](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/event.d.ts#L50)

▸ `Static` **subscribe**<`T`\>(`event1`, `event2`, `event3`, `event4`, `event5`, `event6`, `event7`, `event8`, `event9`, `handler`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event1` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event2` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event3` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event4` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event5` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event6` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event7` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event8` | [`Event`](luucy_event.Event.md)<`T`\> |
| `event9` | [`Event`](luucy_event.Event.md)<`T`\> |
| `handler` | [`EventHandler`](../modules/luucy_event.md#eventhandler)<`T`\> |

#### Returns

`any`

#### Defined in

[luucy/event.d.ts:51](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/event.d.ts#L51)
