import { expect } from 'chai';
import { TestHelpers } from '../../utils/testhelper';

//  change your testcases here
import { getListApproverTestcase } from '../../testcases/sample/sample3.testcase';

// Make your test runner here
export function listRunnerTest() {
  const url = getListApproverTestcase.path // change your endpoint here

  // Make your test suite here
  describe(`PATH: ${url}`, () => {
    // add your test here
    TestHelpers.get(url, getListApproverTestcase.pagination)
    TestHelpers.get(url, getListApproverTestcase.search)

    // add your another test here

  });
}
