declare class Promise<T> {
    static resolve<T>(value: T): Promise<T>;

    then<TRes>(handler: (value: T) => TRes): Promise<TRes>;
    catch<TRes>(handler: (error: any) => TRes): Promise<TRes>;
}