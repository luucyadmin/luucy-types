# Class: TimerInstance

[luucy/timer](../modules/luucy_timer.md).TimerInstance

Timer Instance

Is created by using `Timer.interval(handler, delay)` or `Timer.timeout(handler, delay)`

**`example`**
//  Creating, canceling and manually firing interval
const timer = Timer.interval(index => console.log("executed ", index, " times!"), 5000);

const fireButton = new ui.Button("Fire interval!", () => timer.fire());
ui.areas.panel.add(fireButton);

const cancelButton = new ui.Button("Cancel interval!", () => timer.cancel());
ui.areas.panel.add(cancelButton);

## Table of contents

### Constructors

- [constructor](luucy_timer.TimerInstance.md#constructor)

### Properties

- [index](luucy_timer.TimerInstance.md#index)

### Methods

- [cancel](luucy_timer.TimerInstance.md#cancel)
- [fire](luucy_timer.TimerInstance.md#fire)

## Constructors

### constructor

• **new TimerInstance**()

## Properties

### index

• `Readonly` **index**: `number`

Index

Will automatically be incremented every time the handler is executed.
Starts at `0`

#### Defined in

[luucy/timer.d.ts:86](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/timer.d.ts#L86)

## Methods

### cancel

▸ **cancel**(): `any`

Stops and cancels the timer.

#### Returns

`any`

#### Defined in

[luucy/timer.d.ts:70](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/timer.d.ts#L70)

___

### fire

▸ **fire**(): `any`

Immediately calls the timer.

Timeout timers will still be called when the timeout delay has been reached.
This will increment the index.

#### Returns

`any`

#### Defined in

[luucy/timer.d.ts:78](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/timer.d.ts#L78)
