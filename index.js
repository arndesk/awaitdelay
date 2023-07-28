async function awaitdelay(promise, { timeout }) {
    // Check if timeout is a positive number
    if (typeof timeout !== 'number' || Math.sign(timeout) !== 1) {
        throw new Error('Timeout should be a positive number');
    }

    let timer;
    try {
        return await Promise.race([
            promise,
            new Promise((_, reject) =>
                timer = setTimeout(() => 
                    reject(new Error(`The promise did not resolve within ${timeout} milliseconds.`)), 
                timeout)
            )
        ]);
    } finally {
        clearTimeout(timer);
    }
}

// Node.js module exports
if (typeof module !== 'undefined' && module.exports) {
    module.exports = awaitdelay;
} else {
    // ESM
    self.awaitdelay = awaitdelay;
}