import { expect } from 'chai';
import { TestHelpers } from '../../utils/testhelper';

//change your testcases here
import { LoginTestCase } from '../../testcases/sample/sample2.testcase';

// Make your test runner here
export function loginRunnerTest() {
  const url = LoginTestCase.path // change your endpoint here

  // Make your test suite here
  describe(`PATH: ${url}`, () => {
    // add your test here
    TestHelpers.post(url, LoginTestCase.validData)
    // add your test here
    TestHelpers.post(url, LoginTestCase.invalidData)

    // add your another test here
  })
}
