/**
 * Storage
 * 
 * JSON-serializeable data can be stored in a container.
 */
declare interface StorageContainer {
    read(key: string): Promise<any>;
    write(key: string, value: any): Promise<void>;
}

declare interface ScopedStorage extends StorageContainer {
    /**
     * Shared storage container
     * 
     * Other plugins can read and write to this container, be careful!
     */
    shared: StorageContainer;
}

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
 * Global Storage
 * 
 * @example // Stored text field value for user
 * const field = new ui.TextField('Stored Field', Storage.global.read('my-field') || 'initial value');
 * field.onValueChange.subscribe(value => {
 *     console.log('updated value', value);
 * 
 *     Storage.global.write('my-field', value);
 * });
 */
declare class Storage {
    /**
     * User Storage
     * 
     * Data stored in `user` will only be available for the signed in user.
     */
    static user: ScopedStorage;

    /**
     * Organization Storage
     * 
     * Data stored in `organization` will only be available for all users in the users organization.
     */
    static organization: ScopedStorage;

    /**
     * Global Storage
     * 
     * Data stored in `global` will be available for all users of this plugin.
     */
    static global: ScopedStorage;
}