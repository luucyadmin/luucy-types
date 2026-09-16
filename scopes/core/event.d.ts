type EventHandler<T, TPrevious> = (argument: T, previousArgument: TPrevious | null) => any | void;

/** 
 * Events 
 * 
 * Luucy pushes various events to plugins to inform them about changes in the applications state.
 * 
 * @example // Get notified when the user changes the project
 * onProjectSelect.subscribe(project, previousProject => {
 *     console.log("project selected: ", project);
 *     console.log("previous project: ", previousProject);
 * });
 */
declare class Event<T, TPrevious = T> {
    /** 
     * Subscribe to event
     * 
     * The handler will be executed whenever a new value is emitted with `.emit(value)` and
     * immediately after you subscribe - if there has been a `.emit(value)` call before. 
     */
    subscribe(handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>;

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
    subscribeOnce(tag: string, handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>;
    subscribeOnce(handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>;

    /** 
     * Emits a new value
     * 
     * Will execute all handlers registered with `.subscribe(handler)`.
     * After calling `.emit(value)`, all new subscribers will automatically be executed after calling `.subscribe(handler)`.
     */
    emit(value: T, previousValue: TPrevious | undefined): void;

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
    copy(firePreviousValue?: boolean): Event<T, TPrevious>;

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
    static subscribe<T, TPrevious>(event1: Event<T, TPrevious>, handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>[];
    static subscribe<T, TPrevious>(event1: Event<T, TPrevious>, event2: Event<T, TPrevious>, handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>[];
    static subscribe<T, TPrevious>(event1: Event<T, TPrevious>, event2: Event<T, TPrevious>, event3: Event<T, TPrevious>, handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>[];
    static subscribe<T, TPrevious>(event1: Event<T, TPrevious>, event2: Event<T, TPrevious>, event3: Event<T, TPrevious>, event4: Event<T, TPrevious>, handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>[];
    static subscribe<T, TPrevious>(event1: Event<T, TPrevious>, event2: Event<T, TPrevious>, event3: Event<T, TPrevious>, event4: Event<T, TPrevious>, event5: Event<T, TPrevious>, handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>[];
    static subscribe<T, TPrevious>(event1: Event<T, TPrevious>, event2: Event<T, TPrevious>, event3: Event<T, TPrevious>, event4: Event<T, TPrevious>, event5: Event<T, TPrevious>, event6: Event<T, TPrevious>, handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>[];
    static subscribe<T, TPrevious>(event1: Event<T, TPrevious>, event2: Event<T, TPrevious>, event3: Event<T, TPrevious>, event4: Event<T, TPrevious>, event5: Event<T, TPrevious>, event6: Event<T, TPrevious>, event7: Event<T, TPrevious>, handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>[];
    static subscribe<T, TPrevious>(event1: Event<T, TPrevious>, event2: Event<T, TPrevious>, event3: Event<T, TPrevious>, event4: Event<T, TPrevious>, event5: Event<T, TPrevious>, event6: Event<T, TPrevious>, event7: Event<T, TPrevious>, handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>[];
    static subscribe<T, TPrevious>(event1: Event<T, TPrevious>, event2: Event<T, TPrevious>, event3: Event<T, TPrevious>, event4: Event<T, TPrevious>, event5: Event<T, TPrevious>, event6: Event<T, TPrevious>, event7: Event<T, TPrevious>, handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>[];
    static subscribe<T, TPrevious>(event1: Event<T, TPrevious>, event2: Event<T, TPrevious>, event3: Event<T, TPrevious>, event4: Event<T, TPrevious>, event5: Event<T, TPrevious>, event6: Event<T, TPrevious>, event7: Event<T, TPrevious>, handler: EventHandler<T, TPrevious>): Subscription<T, TPrevious>[];

    /**
     * Returns all subscriptions
     * 
     * This will return untagged (`.subscribe`) and tagged (`.subscribeOnce`) subscriptions
     */
    subscriptions: Subscription<T, TPrevious | null>[];

    /**
     * Finds a tagged subscription (`.subscribeOnce(tag, handler)`)
     * 
     * Don't pass a tag argument to return the hander from `.subscribeOnce(handler)`
     */
    findSubscription(tag?: string): Subscription<T,TPrevious | null> | null;
}

declare interface Subscription<T, TPrevious = T | null> {
    (value: T, previousValue?: TPrevious | null): void;

    id?: string;
    tag?: string;

    handler: EventHandler<T, TPrevious | null>;
    unsubscribe(): void;
}