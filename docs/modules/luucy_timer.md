# Module: luucy/timer

## Table of contents

### Classes

- [TimerInstance](../classes/luucy_timer.TimerInstance.md)

### Variables

- [Timer](luucy_timer.md#timer)

## Variables

### Timer

• **Timer**: `Object`

Timers

Luucy masks global timers to cancel them automatically whenever a plugin in disabled, uninstalled or upgraded.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `interval` | (`handler`: (`index`: `number`) => `unknown`, `delay`: `number`, `executeImmediately?`: `boolean`) => [`TimerInstance`](../classes/luucy_timer.TimerInstance.md) |
| `timeout` | (`handler`: (`index`: `number`) => `unknown`, `delay`: `number`) => [`TimerInstance`](../classes/luucy_timer.TimerInstance.md) |

#### Defined in

[luucy/timer.d.ts:6](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/timer.d.ts#L6)
