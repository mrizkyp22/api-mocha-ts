import { endPoint } from '../../utils/config';
import { generateTokenData } from '../../testcases/cms/generateToken.testcases';
import { TestHelpers } from '../../utils/testhelper';
import { expect } from 'chai';

export function tokenRunnerTest() {
  const endpooint = endPoint.generateToken
  describe(`PATH: ${endpooint}`, () => {
    TestHelpers.post(endpooint, generateTokenData)
  });
}
