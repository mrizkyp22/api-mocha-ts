import { loginTestRunner } from "./tests/login.test";
import { generateTokenTestRunner } from "./tests/generateToken.test";
import { getInformationRunner } from "./tests/getInformation.test";

async function runAllTests() {
  generateTokenTestRunner();
  loginTestRunner();
  getInformationRunner();
}

// Call the function to run all tests
runAllTests();
