// import { validLoginData, invalidLoginData } from '../../testcases/cms/login.testcases';
// import { listApproverPagination } from '../../testcases/cms/listApprover.testcase';
// import { generateTokenData } from '../../testcases/cms/generateToken.testcases';
// import { TestHelpers } from '../../utils/testhelper';
// import { expect } from 'chai';

// export function sampleRunnerTest() {
//   const endPointGenerateToken = endPoint.generateToken
//   const endPointsLogin = endPoint.login
//   const endPointList = endPoint.approverList
//   describe(`PATH: ${endPointGenerateToken}`, () => {
//     TestHelpers.post(endPointGenerateToken, generateTokenData)
//   });
//   describe(`PATH: ${endPointsLogin}`, () => {
//     TestHelpers.post(endPointsLogin, validLoginData, () => {
//       it('should return json object', () => {
//         expect(true).to.be.true
//       });
//     }
//   )

//     TestHelpers.post(endPointsLogin, invalidLoginData)
//   })
//   describe(`PATH: ${endPointList}`, () => {
//     TestHelpers.get(endPointList, listApproverPagination)
//   });
// }
