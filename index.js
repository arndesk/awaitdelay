// Custom Error for invalid arguments
class PromiseUtilsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PromiseUtilsError';
    }
}

async function awaitdelay(promise, { timeout }) {
    // Check if timeout is a positive number
    if (typeof timeout !== 'number' || Math.sign(timeout) !== 1) {
        throw new PromiseUtilsError('Timeout should be a positive number');
    }

    let timer;
    try {
        return await Promise.race([
            promise,
            new Promise((_, reject) =>
                timer = setTimeout(() => 
                    reject(new Error('Timeout')), 
                timeout)
            )
        ]);
    } finally {
        clearTimeout(timer);
    }
}

// Node.js module exports
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { awaitdelay, PromiseUtilsError };
} else {
    // ESM
    self.awaitdelay = awaitdelay;
    self.PromiseUtilsError = PromiseUtilsError;
}
