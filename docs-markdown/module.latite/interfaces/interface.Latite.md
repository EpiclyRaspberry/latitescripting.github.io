[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [latite](../index.md) > Latite

# Latite

**`Interface`**

**Source:** [latite.d.ts:28](https://github.com/LatiteScripting/latitescripting.github.io/blob/0268f00/definitions/latite.d.ts#L28)

## Properties

### version

> **version**: `string`

The Latite Client version. Example: v1.4.0 (release), b1.4.0 (beta)

**Source:** [latite.d.ts:55](https://github.com/LatiteScripting/latitescripting.github.io/blob/0268f00/definitions/latite.d.ts#L55)

## Methods

### getModuleManager()

> **getModuleManager**(): [`ModuleManager`](../../module.mmgr/interfaces/interface.ModuleManager.md)

Gets the module manager. Use this to register modules.

**Source:** [latite.d.ts:50](https://github.com/LatiteScripting/latitescripting.github.io/blob/0268f00/definitions/latite.d.ts#L50)

#### Returns

[`ModuleManager`](../../module.mmgr/interfaces/interface.ModuleManager.md)

### listen()

> **listen**\<K\>(eventName: `K`, listener: `Function`): `void`

Listen to an event.

**Source:** [latite.d.ts:32](https://github.com/LatiteScripting/latitescripting.github.io/blob/0268f00/definitions/latite.d.ts#L32)

#### Type parameters

| Parameter                                                       |
| :-------------------------------------------------------------- |
| K _extends_ _keyof_ [`ClientEvents`](interface.ClientEvents.md) |

#### Parameters

| Parameter | Type                                                                |
| :-------- | :------------------------------------------------------------------ |
| eventName | `K`                                                                 |
| listener  | (event: [`ClientEvents`](interface.ClientEvents.md)[`K`]) => `void` |

#### Returns

`void`

### runCommand()

> **runCommand**(cmd: `string`): `boolean`

Runs a Latite command.

**Source:** [latite.d.ts:45](https://github.com/LatiteScripting/latitescripting.github.io/blob/0268f00/definitions/latite.d.ts#L45)

#### Parameters

| Parameter | Type     | Description                                   |
| :-------- | :------- | :-------------------------------------------- |
| cmd       | `string` | The command to run. Do not add the prefix (.) |

#### Returns

`boolean`

The success of the command.

### showNotification()

> **showNotification**(notif: `string`): `void`

Shows a Latite toast on the top of the screen.

**Source:** [latite.d.ts:38](https://github.com/LatiteScripting/latitescripting.github.io/blob/0268f00/definitions/latite.d.ts#L38)

#### Parameters

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| notif     | `string` | The notification to show. |

#### Returns

`void`