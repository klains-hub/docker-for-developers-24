// Tiny smoke test used in Lab 14 (CI runs `npm test` inside the built image).
// To practise a failing pipeline, change the expected value below and rebuild.
const assert = require('assert');

const APP_ENV = process.env.APP_ENV || 'development';
assert.ok(typeof APP_ENV === 'string' && APP_ENV.length > 0, 'APP_ENV must be a non-empty string');

console.log('ok - smoke test passed');
process.exit(0);
