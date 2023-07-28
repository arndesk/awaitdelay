// Custom Error for invalid arguments
class UtilsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UtilsError';
    }
}

// Custom Error for timeout
class TimeoutError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TimeoutError';
    }
}

async function awaitdelay(promise, { timeout }) {
    // Check if timeout is a positive number
    if (typeof timeout !== 'number' || Math.sign(timeout) !== 1) {
        throw new UtilsError('Timeout should be a positive number');
    }

    let timer;
    try {
        return await Promise.race([
            promise,
            new Promise((_, reject) =>
                timer = setTimeout(() => 
                    reject(new TimeoutError(`The promise did not resolve within ${timeout} milliseconds.`)), 
                timeout)
            )
        ]);
    } finally {
        clearTimeout(timer);
    }
}

// Node.js module exports
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { awaitdelay, UtilsError, TimeoutError };
} else {
    // ESM
    self.awaitdelay = awaitdelay;
    self.UtilsError = UtilsError;
    self.TimeoutError = TimeoutError;
}
