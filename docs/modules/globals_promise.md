# Module: globals/promise

## Table of contents

### Interfaces

- [Promise](../interfaces/globals_promise.Promise.md)
- [PromiseLike](../interfaces/globals_promise.PromiseLike.md)

### Type aliases

- [PromiseConstructorLike](globals_promise.md#promiseconstructorlike)

## Type aliases

### PromiseConstructorLike

Ƭ **PromiseConstructorLike**: <T\>(`executor`: (`resolve`: (`value`: `T` \| [`PromiseLike`](../interfaces/globals_promise.PromiseLike.md)<`T`\>) => `void`, `reject`: (`reason?`: `any`) => `void`) => `void`) => [`PromiseLike`](../interfaces/globals_promise.PromiseLike.md)<`T`\>

#### Type declaration

• <`T`\>(`executor`)

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `executor` | (`resolve`: (`value`: `T` \| [`PromiseLike`](../interfaces/globals_promise.PromiseLike.md)<`T`\>) => `void`, `reject`: (`reason?`: `any`) => `void`) => `void` |

#### Defined in

[globals/promise.d.ts:1](https://github.com/luucyadmin/luucy-types/blob/5fee54b/globals/promise.d.ts#L1)
