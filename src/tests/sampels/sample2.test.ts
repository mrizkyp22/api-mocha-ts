import { expect } from 'chai';
import { TestHelpers } from '../../utils/testhelper';

//change your testcases here
// import { generateTokenData } from '../../testcases/cms/generateToken.testcases';
import { generateTokenTestCase } from '../../testcases/sample/sample.testcase';

// Make your test runner here
export function tokenRunnerTest() {
  const url = generateTokenTestCase.path // change your endpoint here

// Make your test suite here
  describe(`PATH: ${url}`, () => {
    TestHelpers.post(url, generateTokenTestCase.validData)
  });
}
