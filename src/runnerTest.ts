import { generateTokenRunner } from "./tests/cms/generateToken.test";
import { loginRunner } from "./tests/cms/login.test";
import { listApproverRunner } from "./tests/cms/listApprover.test";

async function runAllTests() {

  generateTokenRunner();
  loginRunner();
  listApproverRunner();
}

// Call the function to run all tests
runAllTests();
