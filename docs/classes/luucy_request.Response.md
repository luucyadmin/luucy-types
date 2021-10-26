# Class: Response

[luucy/request](../modules/luucy_request.md).Response

HTTP Response

Responses are created by using the `Request` global.
This class cannot be initated by plugins.

## Table of contents

### Constructors

- [constructor](luucy_request.Response.md#constructor)

### Methods

- [json](luucy_request.Response.md#json)
- [text](luucy_request.Response.md#text)

## Constructors

### constructor

• **new Response**()

## Methods

### json

▸ **json**(): [`Promise`](../interfaces/globals_promise.Promise.md)<`any`\>

Read response data as JSON
Will convert the servers response from JSON to an object.

**`example`**
//  Parsing the response as JSON
// Let's assume that the `https://example.com/path`-API returns a json object: `"{"example":1234}"`
new Request("https://example.com/path").get().then(res => res.json()).then(data => {
    console.log(data.example); // should print 1234
});

#### Returns

[`Promise`](../interfaces/globals_promise.Promise.md)<`any`\>

#### Defined in

[luucy/request.d.ts:54](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/request.d.ts#L54)

___

### text

▸ **text**(): [`Promise`](../interfaces/globals_promise.Promise.md)<`string`\>

Read response data as plain text

Do not convert the data to an object with `JSON.parse()`, use `.json()` instead of `.text()`!

#### Returns

[`Promise`](../interfaces/globals_promise.Promise.md)<`string`\>

#### Defined in

[luucy/request.d.ts:61](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/request.d.ts#L61)
