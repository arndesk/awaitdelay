<br />

<h1 align="center">@arndesk/awaitdelay</h1>
<h4 align="center">A utility to add timeouts to promises</h4>

<p align="center">
  <a href="#get-started">Get Started</a> &bull;
  <a href="#installation">Installation</a> &bull;
  <a href="#usage">Usage</a> &bull;
  <a href="#features">Features</a> &bull;
  <a href="#contributing">Contributing</a> &bull;
  <a href="#license">License</a>
</p>

<h2 id="get-started">Get Started</h2>

<h3 id="installation">Installation</h3>

<p>Use <code>npm</code> to install this package:</p>

<pre>
<code>npm install @arndesk/awaitdelay</code>
</pre>

<h3 id="usage">Usage</h3>

<p>Here's a basic example of how to use awaitdelay in your code:</p>

<pre>
<code>
// ES Modules import
import { awaitdelay } from '@arndesk/awaitdelay';
// CommonJS require
const { awaitdelay } = require('@arndesk/awaitdelay');

// Async function to use the awaitdelay function
async function main() {
  const slowPromise = new Promise(resolve => setTimeout(() => resolve('Resolved'), 5000));

  try {
    const result = await awaitdelay(slowPromise, { timeout: 5000 }); // 5 seconds timeout
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

main();

</code>
</pre>

<h2 id="features">Features</h2>

<ul>
  <li>Provides a straightforward way to add timeouts to promises</li>
  <li>Easily adjustable timeout duration</li>
  <li>Compatible with both ES Modules and CommonJS</li>
  <li>Useful in a wide range of JavaScript and TypeScript projects</li>
</ul>

