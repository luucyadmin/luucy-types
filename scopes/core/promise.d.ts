/**
 * Asynchronous tasks
 * 
 * Promises are used to prevent blocking of the main thread when loading data from the internet or performing any other asynchronous tasks.
 */
declare class Promise<T> {
    constructor(resolver: (done: (result: T) => void, reject: (error: any) => void) => void);

    /**
     * Returns a promise which will immediately be resolved with `value`
     * 
     * @example // creating a very useless promise
     * console.log(await Promise.resolve(123)) // will print 123
     */
    static resolve<T>(value: T): Promise<T>;

    /**
     * Returns a promise which will immediately throw `error`
     * 
     * @example // creating a promise which will instantly kill the plugin
     * Promise.fail(new Error("Some Error"));
     */
    static fail<T>(error: any): Promise<T>;

    /**
     * Resolves all promises and returns an array with all the results.
     * 
     * `all` will fail if one promise fails!
     * 
     * @example // Resolving multiple promises
     * console.log(await Promise.all([
     *     Promise.resolve(1),
     *     Promise.resolve(2),
     *     Promise.resolve(3)
     * ])) // will print [1, 2, 3]
     */
    static all<T1>(promise1: Promise<T1>): Promise<[T1]>;
    static all<T1, T2>(promise1: Promise<T1>, promise2: Promise<T2>): Promise<[T1, T2]>;
    static all<T1, T2, T3>(promise1: Promise<T1>, promise2: Promise<T2>, promise3: Promise<T3>): Promise<[T1, T2, T3]>;
    static all<T1, T2, T3, T4>(promise1: Promise<T1>, promise2: Promise<T2>, promise3: Promise<T3>, promise4: Promise<T4>): Promise<[T1, T2, T3, T4]>;
    static all<T1, T2, T3, T4, T5>(promise1: Promise<T1>, promise2: Promise<T2>, promise3: Promise<T3>, promise4: Promise<T4>, promise5: Promise<T5>): Promise<[T1, T2, T3, T4, T5]>;
    static all<T1, T2, T3, T4, T5, T6>(promise1: Promise<T1>, promise2: Promise<T2>, promise3: Promise<T3>, promise4: Promise<T4>, promise5: Promise<T5>, promise6: Promise<T6>): Promise<[T1, T2, T3, T4, T5, T6]>;
    static all<T1, T2, T3, T4, T5, T6, T7>(promise1: Promise<T1>, promise2: Promise<T2>, promise3: Promise<T3>, promise4: Promise<T4>, promise5: Promise<T5>, promise6: Promise<T6>, promise7: Promise<T7>): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
    static all<T1, T2, T3, T4, T5, T6, T7, T8>(promise1: Promise<T1>, promise2: Promise<T2>, promise3: Promise<T3>, promise4: Promise<T4>, promise5: Promise<T5>, promise6: Promise<T6>, promise7: Promise<T7>, promise8: Promise<T8>): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
    static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(promise1: Promise<T1>, promise2: Promise<T2>, promise3: Promise<T3>, promise4: Promise<T4>, promise5: Promise<T5>, promise6: Promise<T6>, promise7: Promise<T7>, promise8: Promise<T8>, promise9: Promise<T9>): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
    static all(...promises: Promise<any>[]): Promise<any[]>;
    
    /**
     * Subscribe to when the promise resolves.
     * 
     * @example // Awaiting a promise
     * console.log(await Promise.resolve(1)) // -> 1
     * 
     * Promise.resolve(1).then(result => {
     *     console.log(result); // -> 1
     * })
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null): Promise<TResult1 | TResult2>;
     
    /**
     * Subscribe to when the promise fails.
     * This prevents the error from beeing passed on to the next instance, thus preventing the plugin from beeing killed on error
     * 
     * @example // Catching a promise error
     * try {
     *     await Promise.fail(new Error("Some Error"));
     * } catch (error) {
     *     console.log(error) // -> Some Error
     * }
     * 
     * Promise.fail(new Error("Some Error").catch(error => {
     *     console.log(error); // -> Some Error
     * })
     */
    catch<TRes>(handler: (error: any) => TRes): Promise<TRes>;
}