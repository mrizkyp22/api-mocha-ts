import { loginTestRunner } from "./tests/cms/login.test";
import { generateTokenTestRunner } from "./tests/cms/generateToken.test";
import { getInformationRunner } from "./tests/cms/getInformation.test";
import { getListApproverRunner } from "./tests/cms/getListApprover.test";
import { createTokenExtTestRunner } from "./tests/external/createTokenExt.test";

async function runAllTests() {
  generateTokenTestRunner();
  loginTestRunner();
  // getInformationRunner();
  // getListApproverRunner();
  // createTokenExtTestRunner();
}

// Call the function to run all tests
runAllTests();
