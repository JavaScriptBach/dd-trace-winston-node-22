# dd-trace-winston-node-22

Repro a dd-trace bug with winston on Node 22

```
npm ci
node index.js
```

On Node 22.14.0, this incorrectly logs an error with no stack trace.

```javascript
{
  dd: { service: 'dd-trace-winston-node-22', version: '1.0.0' },
  level: 'error',
  message: 'test error with stack',
  stack: undefined
}
```

On Node 20.18.0, this correctly logs an error with a stack trace.

```javascript
{
  dd: { service: 'dd-trace-winston-node-22', version: '1.0.0' },
  level: 'error',
  message: 'test error with stack',
  stack: 'Error: test error with stack\n' +
    '    at Object.<anonymous> (/Users/philliphuang/dd-trace-winston-node-22/index.js:17:14)\n' +
    '    at Module._compile (node:internal/modules/cjs/loader:1469:14)\n' +
    '    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)\n' +
    '    at Module.load (node:internal/modules/cjs/loader:1288:32)\n' +
    '    at Module._load (node:internal/modules/cjs/loader:1104:12)\n' +
    '    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)\n' +
    '    at node:internal/main/run_main_module:28:49'
}
```
