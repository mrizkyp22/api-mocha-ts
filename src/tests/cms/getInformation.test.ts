import 'mocha';
import { expect } from 'chai';
import { endpoint, loginValid } from '../../testcases/cms/login.testcase';
import { login } from '../../api/cms/login';
import { getInformation } from '../../api/cms/getInformation';
import { pathEndpoint, getInformationNoAuth, getInformationSuccess } from '../../testcases/cms/getinformation.testcase';

export function getInformationRunner() {
  describe(pathEndpoint, () => {
    let accessToken: any; // Declare a variable to store the access token

    // Run before each test case in this suite
    before(async () => {
      const loginResponse = await login(endpoint, loginValid.loginData);
      accessToken = loginResponse.data.data.accessToken; // Store the access token
    });

    describe('Positive Cases', () => {
      context(getInformationSuccess.testcase, () => {
        let response: any;
        before(async () => {
          response = await getInformation(accessToken);
        });

        it('should return 200', () => {
          expect(response.data).to.have.property('code', 200);
        });
        it(`should return message ${getInformationSuccess.message}`, () => {
          expect(response.data).to.have.property('message', getInformationSuccess.message);
        });
        it(`should return message ${getInformationSuccess.detailData}`, () => {
          expect(response.data.data).to.have.property('message', getInformationSuccess.detailData);
        });
        it('should have field title and description', () => {
          expect(response.data.data.detail).to.have.property('title')
          expect(response.data.data.detail).to.have.property('description')
        });
      });
    });

    describe('Negative Cases', () => {
      context(getInformationNoAuth.testcase,()=>{
        let response:any;
        before(async()=>{
          response = await getInformation("accessToken");
        });
        it('should return 401', () => {
          expect(response.data).to.have.property('code', 401);
        });
        it(`should return message ${getInformationNoAuth.message}`, () => {
          expect(response.data).to.have.property('message', getInformationNoAuth.message);
        });
        it(`should return message ${getInformationNoAuth.errorDetails}`, () => {
          expect(response.data.meta).to.have.property('message', getInformationNoAuth.errorDetails);
        });
      });
    });
  });
}