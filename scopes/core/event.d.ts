type EventHandler<T> = (argument: T) => any | void;

/** 
 * Events 
 * 
 * Luucy pushes various events to plugins to inform them about changes in the applications state.
 * 
 * @example // Get notified when the user changes the project
 * onProjectSelect.subscribe(project => {
 *     console.log("project selected: ", project);
 * });
 */
declare class Event<T> {
    /** 
     * Subscribe to event
     * 
     * The handler will be executed whenever a new value is emitted with `.emit(value)` and
     * immediately after you subscribe - if there has been a `.emit(value)` call before. 
     */
    subscribe(handler: EventHandler<T>): EventHandler<T>;

    /** 
     * Subscribe once to a event
     * 
     * Same as `.subscribe`, but only the first handler with the provided `tag` will be executed. 
     * If no `tag` is provided, only the first tagless handler will be executed.
     * 
     * @example // Subscribe once
     * const event = new Event<void>();
     * 
     * event.subscribe(() => console.log('hit 1'));
     * event.subscribeOnce('listener1', () => console.log('hit 2'));
     * event.subscribeOnce('listener1', () => console.log('hit 3'));
     * event.subscribeOnce('listener2', () => console.log('hit 4'));
     * 
     * event.emit(); // hit 1, hit 2, hit 4
     */
    subscribeOnce(tag: string, handler: EventHandler<T>): EventHandler<T>;
    subscribeOnce(handler: EventHandler<T>): EventHandler<T>;

    /** 
     * Emits a new value
     * 
     * Will execute all handlers registered with `.subscribe(handler)`.
     * After calling `.emit(value)`, all new subscribers will automatically be executed after calling `.subscribe(handler)`.
     */
    emit(value: T): void;

    /**
     * Will break the event
     * 
     * Emits will no longer execute subscribers.
     * New subscribers will no longer be registered.
     * 
     * Call `unbreak()` to revert the changes.
     */
    break(): void;

    /**
     * Pauses the event
     * 
     * Emits will execute subscribers again.
     * Values will not be stored while broken and the subscribers will not be executed after unbreaking.
     * Subscribers added after breaking the promise will not be registered.
     */
    unbreak(): void;

    /**
     * Copies the event
     * 
     * Breaking a copy will not break the source event.
     * emitting a new value in the source event will emit the value in the copy.
     * emitting a new value in the copy will NOT emit the value in the source event. 
     * 
     * Set `firePreviousValue` to `false` to prevent immediate fire of the event if a value has been emitted before.
     */
    copy(firePreviousValue?: boolean): Event<T>;

    /**
     * Subscribe to multiple events at once
     * 
     * Will call `handler` whenever any of the events fires
     * 
     * @example // Notifiy when either of the inputs change
     * const area = new ui.NumberField("Area");
     * const pricePerM2 = new ui.NumberField("Price Per M2");
     * 
     * const priceLabel = new ui.LabeledValue("Price");
     * 
     * Event.subscribe(area.onValueChange, pricePerM2.onValueChange, value => {
     *     priceLabel.value = area.value * pricePerM2.value;
     * });
     */
    static subscribe<T>(event1: Event<T>, handler: EventHandler<T>): EventHandler<T>;
    static subscribe<T>(event1: Event<T>, event2: Event<T>, handler: EventHandler<T>): EventHandler<T>;
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, handler: EventHandler<T>): EventHandler<T>;
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, event4: Event<T>, handler: EventHandler<T>): EventHandler<T>;
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, event4: Event<T>, event5: Event<T>, handler: EventHandler<T>): EventHandler<T>;
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, event4: Event<T>, event5: Event<T>, event6: Event<T>, handler: EventHandler<T>): EventHandler<T>;
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, event4: Event<T>, event5: Event<T>, event6: Event<T>, event7: Event<T>, handler: EventHandler<T>): EventHandler<T>;
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, event4: Event<T>, event5: Event<T>, event6: Event<T>, event7: Event<T>, event8: Event<T>, handler: EventHandler<T>): EventHandler<T>;
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, event4: Event<T>, event5: Event<T>, event6: Event<T>, event7: Event<T>, event8: Event<T>, event9: Event<T>, handler: EventHandler<T>): EventHandler<T>;
}