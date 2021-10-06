/** Timers */
declare const Timer: {
    /** Interval gets called repedeately until canceled with `.cancel()` */
    /** @param delay interval delay in miliseconds */
    interval(handler: () => unknown, delay: number): TimerInstance;

    /** Timeout gets called after the delay. It can be canceled with `.cancel()` */
    /** @param delay delay in miliseconds */
    timeout(handler: () => unknown, delay: number): TimerInstance;
}

/** Timer Instance */
declare class TimerInstance {
    /** Stops the timer */
    cancel();
}