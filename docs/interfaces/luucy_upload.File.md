# Interface: File

[luucy/upload](../modules/luucy_upload.md).File

File

Will be created whenever a file is uploaded with `Upload`.
The `File` object cannot be created by plugins.

## Table of contents

### Properties

- [name](luucy_upload.File.md#name)
- [size](luucy_upload.File.md#size)

### Methods

- [toString](luucy_upload.File.md#tostring)

## Properties

### name

• `Readonly` **name**: `string`

File name as uploaded.

#### Defined in

[luucy/upload.d.ts:46](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/upload.d.ts#L46)

___

### size

• `Readonly` **size**: `number`

Size in bytes as uploaded

#### Defined in

[luucy/upload.d.ts:51](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/upload.d.ts#L51)

## Methods

### toString

▸ **toString**(): [`Promise`](globals_promise.Promise.md)<`string`\>

Reads the file as a string

**`example`**
//  Reading the files content
file.toString().then(content => {
    console.log("Contents of ", file.name, ": ", content);
});

#### Returns

[`Promise`](globals_promise.Promise.md)<`string`\>

#### Defined in

[luucy/upload.d.ts:62](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/upload.d.ts#L62)
