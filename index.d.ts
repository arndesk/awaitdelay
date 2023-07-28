export declare function awaitdelay(promise: Promise<any>, options: { timeout: number }): Promise<any>;

export declare class UtilsError extends Error {
    constructor(message?: string);
}

export declare class TimeoutError extends Error {
    constructor(message?: string);
}
