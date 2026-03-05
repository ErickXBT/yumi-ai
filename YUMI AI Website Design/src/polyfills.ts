// Polyfills for browser compatibility with Solana web3.js
import { Buffer } from 'buffer/';

// Make Buffer available globally
(window as any).Buffer = Buffer;
(globalThis as any).Buffer = Buffer;
