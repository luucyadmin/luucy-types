# Class: Request

[luucy/request](../modules/luucy_request.md).Request

HTTP / HTTPS Requests

**`example`**
//  Create get request request
new Request("https://example.com/path").get().then(res => res.json()).then(data => {
    console.log(data);
});

## Table of contents

### Constructors

- [constructor](luucy_request.Request.md#constructor)

### Methods

- [addHeader](luucy_request.Request.md#addheader)
- [get](luucy_request.Request.md#get)

## Constructors

### constructor

• **new Request**(`url`)

Create request, compareable to the javascript `fetch()` interface.
Luucy masks your HTTP(s) requests.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the url of your request. this must be absolute (http://example.com/path, https://example.com/, ...)  This will *not* fire your request, you'll need to call `.get()` or `.post()`! |

#### Defined in

[luucy/request.d.ts:19](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/request.d.ts#L19)

## Methods

### addHeader

▸ **addHeader**(`name`, `value`): [`Request`](luucy_request.Request.md)

Add header to request.

Some headers cannot be added, as listed in this list: https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

[`Request`](luucy_request.Request.md)

#### Defined in

[luucy/request.d.ts:26](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/request.d.ts#L26)

___

### get

▸ **get**(): [`Promise`](../interfaces/globals_promise.Promise.md)<[`Response`](luucy_request.Response.md)\>

Execute HTTP `GET` request

#### Returns

[`Promise`](../interfaces/globals_promise.Promise.md)<[`Response`](luucy_request.Response.md)\>

The response object, which has to be resolved to read the data.

#### Defined in

[luucy/request.d.ts:33](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/request.d.ts#L33)
