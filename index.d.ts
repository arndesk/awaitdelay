export declare function awaitdelay(promise: Promise<any>, options: { timeout: number }): Promise<any>;

export declare class PromiseUtilsError extends Error {
    constructor(message?: string);
}
