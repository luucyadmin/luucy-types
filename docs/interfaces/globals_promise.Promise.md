# Interface: Promise<T\>

[globals/promise](../modules/globals_promise.md).Promise

Represents the completion of an asynchronous operation

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [catch](globals_promise.Promise.md#catch)
- [then](globals_promise.Promise.md#then)

## Methods

### catch

▸ **catch**<`TResult`\>(`onrejected?`): [`Promise`](globals_promise.Promise.md)<`T` \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onrejected?` | (`reason`: `any`) => `TResult` \| [`PromiseLike`](globals_promise.PromiseLike.md)<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

[`Promise`](globals_promise.Promise.md)<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Defined in

[globals/promise.d.ts:30](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/promise.d.ts#L30)

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): [`Promise`](globals_promise.Promise.md)<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | (`value`: `T`) => `TResult1` \| [`PromiseLike`](globals_promise.PromiseLike.md)<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | (`reason`: `any`) => `TResult2` \| [`PromiseLike`](globals_promise.PromiseLike.md)<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

[`Promise`](globals_promise.Promise.md)<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Defined in

[globals/promise.d.ts:23](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/promise.d.ts#L23)
