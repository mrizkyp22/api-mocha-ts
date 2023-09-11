import { tokenRunnerTest } from "./tests/sampels/sample2.test";
import { loginRunnerTest } from "./tests/sampels/sample3.test";
import { listRunnerTest } from "./tests/sampels/sample4.test";

async function runAllTests() {

  tokenRunnerTest(); 
  loginRunnerTest();
  listRunnerTest();
  
}

// Call the function to run all tests
runAllTests();
