/** 
 * Timers 
 * 
 * Luucy masks global timers to cancel them automatically whenever a plugin in disabled, uninstalled or upgraded.
 */
declare const Timer: {
    /** 
     * Interval gets called repedeately until canceled with `.cancel()`.
     * Compareable to javascripts standard `setInterval()`.
     * 
     * Do not use timers to poll data, all interfaces exposed by luucy contain subscribeable events!
     * 
     * @param handler handler which should be called
     * @param delay interval delay in miliseconds
     * @param executeImmediately setting this to false will prevent the interval from beeing executed immediately after beeing created
     * 
     * @example // Execute a piece of code every minute
     * console.log("creating interval...");
     * 
     * Timer.interval(index => {
     *     // everything in here will be executed each minute
     *     console.log("interval called ", index, " times!");
     * }, 60 * 1000); // 60 * 1000ms is one minute
     * 
     * console.log("created interval!");
     */
    interval(handler: (index: number) => unknown, delay: number, executeImmediately?: boolean): TimerInstance;

    /** 
     * Timeout gets called after the delay. It can be canceled with `.cancel()`.
     * Compareable to javascripts standard `setTimeout()`.
     * 
     * @param handler handler which should be called
     * @param delay delay in milisecond
     * 
     * @example // Execute a piece of code after 10 seconds
     * console.log("creating timeout...");
     * 
     * Timer.timeout(() => {
     *     // everything in here will be executed after 10 seconds
     *     console.log("10 seconds went by!")
     * }, 10 * 1000); // 10 * 1000ms are 10 seconds
     * 
     * console.log("created timer!");
     */
    timeout(handler: (index: number) => unknown, delay: number): TimerInstance;
}

/** 
 * Timer Instance 
 * 
 * Is created by using `Timer.interval(handler, delay)` or `Timer.timeout(handler, delay)`
 * 
 * @example // Creating, canceling and manually firing interval
 * const timer = Timer.interval(index => console.log("executed ", index, " times!"), 5000);
 * 
 * const fireButton = new ui.Button("Fire interval!", () => timer.fire());
 * section.add(fireButton);
 * 
 * const cancelButton = new ui.Button("Cancel interval!", () => timer.cancel());
 * section.add(cancelButton);
 */
declare class TimerInstance {
    /**
     * Stops and cancels the timer.
     */
    cancel();

    /**
     * Immediately calls the timer. 
     * 
     * Timeout timers will still be called when the timeout delay has been reached.
     * This will increment the index.
     */
    fire();

    /** 
     * Index 
     * 
     * Will automatically be incremented every time the handler is executed.
     * Starts at `0`
     */
    readonly index: number;
}