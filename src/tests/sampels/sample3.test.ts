import { endPoint } from '../../utils/config';
import { listApproverPagination } from '../../testcases/cms/listApprover.testcase';
import { TestHelpers } from '../../utils/testhelper';
import { expect } from 'chai';

export function listRunnerTest() {
  const endPoints = endPoint.approverList

  describe(`PATH: ${endPoints}`, () => {
    TestHelpers.get(endPoints, listApproverPagination)
  });
}
