/** 
 * Events 
 */
declare class PluginEvent<T> {
    /** 
     * Subscribe to event
     * 
     * The handler will be executed whenever a new value is emitted with `.emit(value)` and
     * immediately after you subscribe - if there has been a `.emit` call before. 
     */
    subscribe(handler: (argument: T) => any | void);

    /** 
     * Emits a new value
     * 
     * Will execute all handlers registered with `.subscribe(handler)`.
     * After calling `.emit(value)`, all new subscribers will automatically be executed after calling `.subscribe(handler)`.
     */
    emit(value: T);
}