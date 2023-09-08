import { generateTokenRunner } from "./tests/cms/generateToken.test";
import { loginRunner } from "./tests/cms/login.test";
import { listApproverRunner } from "./tests/cms/listApprover.test";
import { loginRunnerTest } from "./tests/sampels/sample.test";
import { tokenRunnerTest } from "./tests/sampels/sample2.test";
import { listRunnerTest } from "./tests/sampels/sample3.test";

async function runAllTests() {

  // generateTokenRunner();
  // loginRunner();
  // listApproverRunner();
  tokenRunnerTest(); 
  loginRunnerTest();
  listRunnerTest();
}

// Call the function to run all tests
runAllTests();
