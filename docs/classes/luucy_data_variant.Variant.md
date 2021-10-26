# Class: Variant

[luucy/data/variant](../modules/luucy_data_variant.md).Variant

Luucy Variant

A project variant presents a way of realizing a infrastructure project.
Multiple variants will be compared to eachother by the user to find the optimal way to realize a project.

## Table of contents

### Constructors

- [constructor](luucy_data_variant.Variant.md#constructor)

### Properties

- [floorArea](luucy_data_variant.Variant.md#floorarea)
- [name](luucy_data_variant.Variant.md#name)
- [onFloorAreaChange](luucy_data_variant.Variant.md#onfloorareachange)
- [onVolumeChange](luucy_data_variant.Variant.md#onvolumechange)
- [volume](luucy_data_variant.Variant.md#volume)

## Constructors

### constructor

• **new Variant**()

## Properties

### floorArea

• `Readonly` **floorArea**: `number`

Contains the floor area of all buildings and uses of this project variant

#### Defined in

[luucy/data/variant.d.ts:16](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/data/variant.d.ts#L16)

___

### name

• `Readonly` **name**: `string`

Variant name

#### Defined in

[luucy/data/variant.d.ts:11](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/data/variant.d.ts#L11)

___

### onFloorAreaChange

• `Readonly` **onFloorAreaChange**: [`Event`](luucy_event.Event.md)<`number`\>

Will be called when the variants floor area changes

**`example`**
//  Listen to changes in the area
variant.onFloorAreaChange.subscribe(area => {
    console.log("Area of ", variant.name, " changed to ", area, "m²")
});

#### Defined in

[luucy/data/variant.d.ts:43](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/data/variant.d.ts#L43)

___

### onVolumeChange

• `Readonly` **onVolumeChange**: [`Event`](luucy_event.Event.md)<`number`\>

Will be called when the variants volume changes

**`example`**
//  Listen to changes in the volume
variant.onVolumeChange.subscribe(volume => {
    console.log("Volume of ", variant.name, " changed to ", volume, "m³")
});

#### Defined in

[luucy/data/variant.d.ts:32](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/data/variant.d.ts#L32)

___

### volume

• `Readonly` **volume**: `number`

Contains the volume of all buildings and uses of this project variant

#### Defined in

[luucy/data/variant.d.ts:21](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/data/variant.d.ts#L21)
