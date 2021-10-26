# Class: Upload

[luucy/upload](../modules/luucy_upload.md).Upload

Uplaod handler

Luucy plugins can register themselves to handle uploads.
The upload handlers are listed in the upload panel.

All upload handlers that match the pattern will be called.

**`example`**
//  Listen to all *.mymodel uploads
const uploader = new Upload("*.mymodel");
uploader.onUpload.subscribe(file => {
    console.log("Uploaded ", file.name, ". Size: ", file.size, "bytes");

    file.toString().then(content => {
        console.log("Contents of ", file.name, ": ", content);
    });
});

## Table of contents

### Constructors

- [constructor](luucy_upload.Upload.md#constructor)

### Properties

- [onUpload](luucy_upload.Upload.md#onupload)

## Constructors

### constructor

• **new Upload**(`pattern`)

Creates an upload listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` | specifies which files will be sent to the plugin. Use '*' as a wildcard (e.g. '*.txt', 'exported_model_*.txt'). |

#### Defined in

[luucy/upload.d.ts:26](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/upload.d.ts#L26)

## Properties

### onUpload

• **onUpload**: [`Event`](luucy_event.Event.md)<[`File`](../interfaces/luucy_upload.File.md)\>

Upload handler event

Will be called whenever a matching file is uploaded

#### Defined in

[luucy/upload.d.ts:33](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/upload.d.ts#L33)
