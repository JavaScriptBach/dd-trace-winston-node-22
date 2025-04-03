# dd-trace-winston-node-22

Repro a dd-trace bug with winston on Node 22

```
npm ci
node index.js
```

On Node 22.14.0, this incorrectly logs an error with no stack trace.

On Node 20.18.0, this correctly logs an error with a stack trace.
