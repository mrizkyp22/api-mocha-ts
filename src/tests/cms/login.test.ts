import 'mocha';
import { expect } from 'chai';
import { login } from '../../api/cms/login';
import {
  endpoint,
  pathEndpoint,
  loginInvalid,
  loginValid,
  loginInvalid3times,
  loginEmptyField,
  loginNULLValue,
  loginSQLInject,
  loginBooleanValues,
  loginHTMLValues
} from '../../testcases/cms/login.testcase';

export function loginTestRunner() {
  describe(pathEndpoint, () => {
    describe('Positive Cases', () => {
      context(loginValid.testcase, () => {
        let response: any;

        before(async () => {
          response = await login(endpoint, loginValid.loginData);
        });

        it('should return code 200', async () => {
          expect(response.data.code).to.equal(200, 'Expected status code to be 200');
        });

        it(`should return message "${loginValid.message}"`, () => {
          expect(response.data).to.have.property('message', loginValid.message);
        });

        it('should have field "accessToken"', async () => {
          expect(response.data.data).to.have.property('accessToken').that.is.a('string');
        });
      });
    });

    describe('Negative Cases', () => {
      const negativeTestCases = [
        loginInvalid,
        loginEmptyField,
        loginSQLInject,
        loginNULLValue,
        loginBooleanValues,
        loginHTMLValues
      ];

      negativeTestCases.forEach(testCase => {
        context(testCase.testcase, async () => {
          let response: any;

          before(async () => {
            response = await login(endpoint, testCase.loginData);
          });

          it('should return code 400', async () => {
            expect(response.data).to.have.property('code', 400);
          });

          it(`should return message "${testCase.message}"`, async () => {
            expect(response.data).to.have.property('message', testCase.message);
          });

          if ('errorDetails' in testCase) {
            it(`should have details.message "${testCase.errorDetails}"`, () => {
              expect(response.data.details).to.have.property('message', testCase.errorDetails);
            });
          } else {
            it('should not have data object', () => {
              expect(response.data).to.not.have.property('data');
            });
          }
        });
      });

      context(loginInvalid3times.testcase, async () => {
        let response: any;

        before(async () => {
          for (let i = 0; i < 3; i++) {
            response = await login(endpoint, loginInvalid.loginData);
          }
        });

        it('should return code 400', async () => {
          expect(response.data).to.have.property('code', 400);
        });

        it(`should return message "${loginInvalid3times.message}"`, async () => {
          expect(response.data).to.have.property('message', loginInvalid3times.message);
        });

        it(`should have details.message "${loginInvalid3times.errorDetails}"`, () => {
          expect(response.data.details).to.have.property('message', loginInvalid3times.errorDetails);
        });
      });
    });
  });
}