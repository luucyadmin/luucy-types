/** Events */
declare class PluginEvent<T> {
    /** Subscribe to event. will be executed on subscribe if a value has been emitted before */
    subscribe(handler: (argument: T) => any | void);

    /** Emit new value. will call all subscribers */
    emit(value: T);
}