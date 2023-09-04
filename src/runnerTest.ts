import { testRunner } from "./tests/sampels/run.test";
import { testRunner2 } from "./tests/sampels/run2.test";
import {testRunner3 } from "./tests/sampels/run3.test";

async function runAllTests() {
  testRunner();
  testRunner2();
  testRunner3();
}

// Call the function to run all tests
runAllTests();
