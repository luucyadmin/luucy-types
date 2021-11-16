declare class Promise<T> {
    constructor(resolver: (done: (result: T) => void) => void);

    static resolve<T>(value: T): Promise<T>;

    then<TRes>(handler: (value: T) => TRes): Promise<TRes>;
    catch<TRes>(handler: (error: any) => TRes): Promise<TRes>;
}