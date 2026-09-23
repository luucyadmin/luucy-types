/**
 * Storage
 * 
 * JSON-serializeable data can be stored in a container.
 */
declare interface StorageContainer {
    /** Reads the stored value for `key`, or `undefined` if nothing has been stored yet. */
    read<T = any>(key: string): Promise<T>;
    /** Stores `value` under `key`. */
    write(key: string, value: any): Promise<void>;
}

/**
 * A storage container that also exposes a `shared` container visible to other plugins.
 */
declare interface ScopedStorage extends StorageContainer {
    /**
     * Shared storage container
     * 
     * Other plugins can read and write to this container, be careful!
     */
    shared: StorageContainer;
}

/**
 * Groups the `user`, `organization` and `global` scoped storage containers bound to a specific object.
 */
declare interface StorageRouter {
    /**
     * User Bound Storage
     * 
     * Whatever is stored within this container will only be visible to the currently logged in user
     */
    user: ScopedStorage;

    /**
     * Organization Bound Storage
     * 
     * Whatever is stored within this container will only be visible to people that are part of the current organization
     */
    organization: ScopedStorage;

    /**
     * Unbound storage
     * 
     * Everything stored within this container will be visible to all users
     */
    global: ScopedStorage;
}

/**
 * Describes a single write to a storage container, as emitted by `GlobalStorage.onWrite`.
 */
declare interface StorageEntry {
    /** The key that was written to. */
    key: string;
    /** The value that was written. */
    value: string;
    /** Whether the write originated from this plugin. */
    plugin: boolean;
    /** The scope the entry was written to, or `null` for the unbound global storage. */
    scope: 'user' | 'organization' | null;
    /** The bound storage router the entry belongs to, if any (see `createStorageRouter`). */
    binding: { type: string; id: string } | null;
}

/**
 * Global Storage
 * 
 * @example // Stored text field value for user
 * const field = new ui.TextField('Stored Field');
 * 
 * Storage.global.read('my-field').then(value => field.value = value || 'initial value');
 * 
 * field.onValueChange.subscribe(value => {
 *     console.log('updated value', value);
 * 
 *     Storage.global.write('my-field', value);
 * });
 */
declare interface GlobalStorage {
    /**
     * General User Storage
     * 
     * Data stored in `user` will only be available for the signed in user.
     */
    user: ScopedStorage;

    /**
     * General Organization Storage
     * 
     * Data stored in `organization` will only be available for all users in the users organization.
     */
    organization: ScopedStorage;

    /**
     * General Global Storage
     * 
     * Data stored in `global` will be available for all users of this plugin.
     */
    global: ScopedStorage;

    /**
     * Create Bound Storage Container
     */
    createStorageRouter(type: string, id: string): StorageRouter;

    /** Fired whenever a value is written to any storage container. */
    onWrite: Event<StorageEntry, StorageEntry | undefined>;
}

declare const Storage: GlobalStorage;