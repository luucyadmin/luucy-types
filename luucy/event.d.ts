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
    subscribe(handler: EventHandler<T>);

    /** 
     * Emits a new value
     * 
     * Will execute all handlers registered with `.subscribe(handler)`.
     * After calling `.emit(value)`, all new subscribers will automatically be executed after calling `.subscribe(handler)`.
     */
    emit(value: T);

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
    static subscribe<T>(event1: Event<T>, handler: EventHandler<T>);
    static subscribe<T>(event1: Event<T>, event2: Event<T>, handler: EventHandler<T>);
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, handler: EventHandler<T>);
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, event4: Event<T>, handler: EventHandler<T>);
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, event4: Event<T>, event5: Event<T>, handler: EventHandler<T>);
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, event4: Event<T>, event5: Event<T>, event6: Event<T>, handler: EventHandler<T>);
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, event4: Event<T>, event5: Event<T>, event6: Event<T>, event7: Event<T>, handler: EventHandler<T>);
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, event4: Event<T>, event5: Event<T>, event6: Event<T>, event7: Event<T>, event8: Event<T>, handler: EventHandler<T>);
    static subscribe<T>(event1: Event<T>, event2: Event<T>, event3: Event<T>, event4: Event<T>, event5: Event<T>, event6: Event<T>, event7: Event<T>, event8: Event<T>, event9: Event<T>, handler: EventHandler<T>);
}