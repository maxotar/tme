#!/usr/bin/env node

const Runner = require("./runner");

const runner = new Runner();

async function run() {
  await runner.collectFiles(process.cwd());
  runner.runTests();
}

run();
